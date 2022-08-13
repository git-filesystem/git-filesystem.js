import {
  Client,
  ClientFactory,
  fqTagRefPrefix,
  GitUser,
  Provider as ProviderName
} from "gitbuckets";

/*

  Test order matters!

 */

interface Provider {
  name: ProviderName;
  user: string | undefined;
  accessToken: string | undefined;
  anotherUser: string;
}

const providers: Provider[] = [
  {
    name: "github",
    user: process.env.E2E_GITHUB_USERNAME,
    accessToken: process.env.E2E_GITHUB_PAT,
    anotherUser: "microsoft"
  }
  // {
  //   name: "gitlab",
  //   user: process.env.E2E_GITLAB_USERNAME,
  //   accessToken: process.env.E2E_GITLAB_PAT,
  //   anotherUser: "TODO"
  // }
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

    const testTagName = "test-tag";

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

    fit(`should get the ${provider.name} client`, () => {
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
      fit("should be able to make a repository", async () => {
        const doesExistBefore = await client.doesRepositoryExist(repositoryName);
        expect(doesExistBefore).toBe("DoesNotExist");

        const repository = await client.createRepository(
          repositoryName,
          true,
          `Temporary repository for e2e test run ${repositoryName}`
        );

        expect(repository).toBeDefined();
        expect(repository.fqBranch.repositoryName).toBe(repositoryName);

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

      if (provider.name === "github")
        it(`should be able to get all repositories for a different user (${provider.anotherUser})`, async () => {
          const repositories = await client.getAllRepositories(provider.anotherUser);

          expect(repositories).toBeDefined();
          expect(repositories).not.toContain(repositoryNameWithOwner);
        });
    });

    describe("creating files", () => {
      fit("should be able to create a new text file", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createFile(testFilePath, originalTextFileContent);

        const resultingFileContent = await repository.readFile(testFilePath);
        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      it("should be able to create a new text file in a directory that doesn't exist", async () => {
        const deepFilePath = "deep/test-file.txt";
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createFile(deepFilePath, originalTextFileContent);

        const resultingFileContent = await repository.readFile(deepFilePath);
        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      it("should be able to create a new json file", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createJsonFile(jsonFilePath, originalJsonFileContent);

        const writtenObject = await repository.readJsonFile(jsonFilePath);
        expect(writtenObject).toEqual(originalJsonFileContent);
      });

      it("should be able to create a new json file in a directory that doesn't exist", async () => {
        const deepFilePath = "deep/test-file.json";
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createJsonFile(deepFilePath, originalJsonFileContent);

        const writtenObject = await repository.readJsonFile(deepFilePath);
        expect(writtenObject).toEqual(originalJsonFileContent);
      });
    });

    describe("creating a tag", () => {
      it("should be able to create a tag with the short name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createTag(testTagName);

        const tags = await repository.getAllTags();
        const tagNames = tags.map(tag => tag.ref);
        expect(tagNames).toContain("refs/tags/" + testTagName);
      });

      it("should be able to create a tag with the fully qualified name", async () => {
        const fullyQualifiedTagName = "refs/tags/" + testTagName + "2";

        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createTag(fullyQualifiedTagName);

        const tags = await repository.getAllTags();
        const tagNames = tags.map(tag => tag.ref);
        expect(tagNames).toContain(fullyQualifiedTagName);
      });
    });

    describe("updating files", () => {
      it("should be able to update a pre-existing text file", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.updateFile(testFilePath, updatedTextFileContent);

        const writtenText = await repository.readFile(testFilePath);
        expect(writtenText).toBe(updatedTextFileContent);
      });

      it("should be able to update a pre-existing json file", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.updateJsonFile(jsonFilePath, updatedJsonFileContent);

        const writtenObject = await repository.readJsonFile(jsonFilePath);
        expect(writtenObject).toEqual(updatedJsonFileContent);
      });
    });

    describe("reading from a tag", () => {
      it("should be able to read a text file from a tag using the short name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        const resultingFileContent = await repository.readFile(testFilePath, testTagName);
        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      it("should be able to read a text file from a tag using the fully qualified name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        const resultingFileContent = await repository.readFile(
          testFilePath,
          `${fqTagRefPrefix}${testTagName}`
        );
        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      it("should be able to read a json file from a tag using the short name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        const writtenObject = await repository.readJsonFile(jsonFilePath, testTagName);
        expect(writtenObject).toEqual(originalJsonFileContent);
      });

      it("should be able to read a json file from a tag using the fully qualified name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        const writtenObject = await repository.readJsonFile(
          jsonFilePath,
          `${fqTagRefPrefix}${testTagName}`
        );
        expect(writtenObject).toEqual(originalJsonFileContent);
      });
    });

    describe("deleting files", () => {
      it("should be able to delete a file", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.deleteFile(testFilePath);

        // const doesExist = await repository.doesFileExist(testFilePath);
        // expect(doesExist).toBe("DoesNotExist");
      });
    });

    describe("deleting tags", () => {
      it("should be able to delete a tag using the short name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.deleteTag(testTagName);

        const tags = await repository.getAllTags();
        const tagNames = tags.map(tag => tag.ref);
        expect(tagNames).not.toContain(testTagName);
      });

      it("should be able to delete a tag using the fully qualified name", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.deleteTag(`${fqTagRefPrefix}${testTagName}2`);

        const tags = await repository.getAllTags();
        const tagNames = tags.map(tag => tag.ref);
        expect(tagNames).not.toContain(testTagName);
      });
    });

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
