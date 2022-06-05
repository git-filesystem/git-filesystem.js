import { Client, GitUser, Provider as ProviderName } from "../src/client";
import { ClientFactory } from "../src/client-factory";

/*

  Test order matters!

 */

interface Provider {
  name: ProviderName;
  user: string | undefined;
  accessToken: string | undefined;
}

const providers: Provider[] = [
  { name: "github", user: process.env.E2E_GITHUB_USERNAME, accessToken: process.env.E2E_GITHUB_PAT }
  // { name: "gitlab", user: process.env.E2E_GITLAB_USERNAME, accessToken: process.env.E2E_GITLAB_PAT }
];

providers.forEach(provider =>
  describe(`${provider.name}, user ${provider.user}`, () => {
    let accessToken: string;
    let userAccount: string;
    let repositoryName: string;
    let repositoryNameWithOwner: string;

    let client: Client;

    const testFilePath = "test-file.txt";
    const originalTextFileContent = "original file content";
    const updatedTextFileContent = "updated file content";

    const jsonFilePath = "test-file.json";
    const originalJsonFileContent = Object.freeze({ original: "json file content" });
    const updatedJsonFileContent = Object.freeze({ updated: "json file content" });

    // const testTagName = "test-tag";

    beforeAll(() => {
      expect(provider.accessToken).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      accessToken = provider.accessToken!;

      expect(provider.user).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      userAccount = provider.user!;

      const currentMs = new Date().getUTCMilliseconds();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      repositoryName = `e2e-test-${currentMs}-${randomNumber}`;
      repositoryNameWithOwner = `${userAccount}/${repositoryName}`;
    });

    it(`should get the ${provider.name} client`, () => {
      const user: GitUser = {
        name: "gitbuckets-e2e",
        email: "gitbuckets.e2e@tobysmith.uk"
      };

      const factory = new ClientFactory();
      client = factory.getClientForProvider(
        provider.name,
        userAccount,
        accessToken,
        "CI",
        user,
        user
      );

      expect(client).toBeDefined();
      expect(client.provider).toBe(provider.name);
    });

    describe("create repositories", () => {
      it("should be able to make a repository", async () => {
        const doesExistBefore = await client.doesRepositoryExist(repositoryName);
        expect(doesExistBefore).toBe("DoesNotExist");

        const repository = await client.createRepository(
          repositoryName,
          true,
          `Temporary repository for e2e test run ${repositoryName}`
        );

        expect(repository).toBeDefined();
        expect(repository.repositoryName).toBe(repositoryName);

        const doesExistAfter = await client.doesRepositoryExist(repositoryName);
        expect(doesExistAfter).toBe("Exists");
      });
    });

    describe("getting repositories", () => {
      it("should be able to get all repositories for the current user", async () => {
        const repositories = await client.getAllRepositories();

        expect(repositories).toBeDefined();
        expect(repositories).toContain(repositoryNameWithOwner);
      });

      it("should be able to get all repositories for a different user", async () => {
        const repositories = await client.getAllRepositories("microsoft");

        expect(repositories).toBeDefined();
        expect(repositories).not.toContain(repositoryNameWithOwner);
      });
    });

    describe("creating files", () => {
      it("should be able to create a new text file in a repository", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createFile(testFilePath, originalTextFileContent);

        const resultingFileContent = await repository.readFile(testFilePath);
        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      it("should be able to create a new json file in a repository", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createJsonFile(jsonFilePath, originalJsonFileContent);

        const writtenObject = await repository.readJsonFile(jsonFilePath);
        expect(writtenObject).toEqual(originalJsonFileContent);
      });
    });

    // describe("creating a tag", () => {
    //   it("should be able to create a new tag", async () => {
    //     const repository = client.getRepository(repositoryName, userAccount);

    //     await repository.createTag(testTagName);

    //     const tags = await repository.getAllTags();
    //     const tagNames = tags.map(tag => tag.name);
    //     expect(tagNames).toContain(testTagName);
    //   });
    // });

    describe("updating files", () => {
      it("should be able to update a pre-existing text file in a repository", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.updateFile(testFilePath, updatedTextFileContent);

        const writtenText = await repository.readFile(testFilePath);
        expect(writtenText).toBe(updatedTextFileContent);
      });

      it("should be able to update a pre-existing json file in a repository", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.updateJsonFile(jsonFilePath, updatedJsonFileContent);

        const writtenObject = await repository.readJsonFile(jsonFilePath);
        expect(writtenObject).toEqual(updatedJsonFileContent);
      });
    });

    // describe("reading from a tag", () => {
    //   it("should be able to read a file from a tag", async () => {
    //     const repository = client.getRepository(repositoryName, userAccount);

    //     const resultingFileContent = await repository.readFile(testFilePath, testTagName);
    //     expect(resultingFileContent).toBe(originalTextFileContent);
    //   });

    //   it("should be able to read a json file from a tag", async () => {
    //     const repository = client.getRepository(repositoryName, userAccount);

    //     const writtenObject = await repository.readJsonFile(jsonFilePath, testTagName);
    //     expect(writtenObject).toEqual(originalJsonFileContent);
    //   });
    // });

    describe("deleting files", () => {
      it("should be able to delete a file from a repository", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.deleteFile(testFilePath);

        // const doesExist = await repository.doesFileExist(testFilePath);
        // expect(doesExist).toBe("DoesNotExist");
      });
    });

    // describe("deleting tags", () => {
    //   it("should be able to delete a tag", async () => {
    //     const repository = client.getRepository(repositoryName, userAccount);

    //     await repository.deleteTag(testTagName);

    //     const tags = await repository.getAllTags();
    //     const tagNames = tags.map(tag => tag.name);
    //     expect(tagNames).not.toContain(testTagName);
    //   });
    // });

    describe("deleting repositories", () => {
      it("should be able to delete a repository", async () => {
        const doesExistBefore = await client.doesRepositoryExist(repositoryName);
        expect(doesExistBefore).toBe("Exists");

        await client.deleteRepository(repositoryName);

        const doesExistAfter = await client.doesRepositoryExist(repositoryName);
        expect(doesExistAfter).toBe("DoesNotExist");
      });
    });
  })
);
