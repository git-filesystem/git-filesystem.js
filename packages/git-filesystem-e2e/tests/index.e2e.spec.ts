import {
  Client,
  ClientFactory,
  fqTagRefPrefix,
  GitUser,
  Provider as ProviderName
} from "git-filesystem";

jest.retryTimes(3, { logErrorsBeforeRetry: true });

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
    user: process.env["E2E_GITHUB_USERNAME"],
    accessToken: process.env["E2E_GITHUB_PAT"],
    anotherUser: "microsoft"
  },
  {
    name: "gitlab",
    user: process.env["E2E_GITLAB_USERNAME"],
    accessToken: process.env["E2E_GITLAB_PAT"],
    anotherUser: "TODO"
  }
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
    const originalJsonFileContent = Object.freeze({
      original: "json file content"
    });
    const updatedJsonFileContent = Object.freeze({
      updated: "json file content"
    });

    const testTagName = "test-tag";

    beforeAll(() => {
      /* eslint-disable jest/no-standalone-expect */
      /* eslint-disable @typescript-eslint/no-non-null-assertion */

      expect(provider.accessToken).toBeDefined();
      accessToken = provider.accessToken!;

      expect(provider.user).toBeDefined();
      userAccount = provider.user!;

      /* eslint-enable jest/no-standalone-expect */
      /* eslint-enable @typescript-eslint/no-non-null-assertion */

      const currentMs = new Date().getUTCMilliseconds();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      repositoryName = `e2e-test-${currentMs}-${randomNumber}`;
      repositoryNameWithOwner = `${userAccount}/${repositoryName}`;
    });

    beforeEach(async () => {
      if (process.env["CI"]) {
        console.log("Detected running in a CI environment. Pausing before running next test");
        await new Promise<void>(r => setTimeout(() => r(), 500));
      }
    });

    it(`should get the ${provider.name} client`, () => {
      const user: GitUser = {
        name: "git-filesystem-e2e",
        email: "git-filesystem.e2e@tobysmith.uk"
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
      it("should be able to create a repository", async () => {
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

      it("should throw when trying to create a repository that already exists", async () => {
        const doesExistBefore = await client.doesRepositoryExist(repositoryName);
        expect(doesExistBefore).toBe("Exists");

        const action = () =>
          client.createRepository(
            repositoryName,
            true,
            `Temporary repository for e2e test run ${repositoryName}`
          );

        await expect(action).rejects.toThrow(`Repository ${repositoryName} already exists`);
      });
    });

    describe("getting repositories", () => {
      it("should be able to get all repositories for the current user", async () => {
        const repositories = await client.getAllRepositories();

        expect(repositories).toBeDefined();
        expect(repositories).toContain(repositoryNameWithOwner);
      });

      // TODO: Implement for GitLab too
      // TODO: Fix exposing personal private repos
      if (provider.name === "github")
        it(`should be able to get all repositories for a different user (${provider.anotherUser})`, async () => {
          const repositories = await client.getAllRepositories(provider.anotherUser);

          expect(repositories).toBeDefined();
          expect(repositories).not.toContain(repositoryNameWithOwner);
        });
    });

    describe("creating files", () => {
      it("should be able to create a new text file", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await repository.createFile(testFilePath, originalTextFileContent);

        const resultingFileContent = await repository.readFile(testFilePath);
        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      // Github cannot tell the difference between creates and updates
      if (provider.name !== "github")
        it("should throw when creating a text file that already exists", async () => {
          const repository = client.getRepository(repositoryName, userAccount);

          const action = () => repository.createFile(testFilePath, originalTextFileContent);

          await expect(action).rejects.toThrow(
            "Unable to create commit: A file with this name already exists"
          );
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

    describe("reading files", () => {
      it("should be able to read a file that does exist", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        const resultingFileContent = await repository.readFile(testFilePath);

        expect(resultingFileContent).toBe(originalTextFileContent);
      });

      it("should throw when reading a file that does not exist", async () => {
        const repository = client.getRepository(repositoryName, userAccount);

        await expect(repository.readFile("file-does-not.exist")).rejects.toThrow(
          "File file-does-not.exist not found"
        );
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

    describe("commit builder", () => {
      it("should be able to read new file content before it's committed", async () => {
        const filePath = "temp-file-name.txt";
        const fileContent = "temp content not to be committed";

        const repository = client.getRepository(repositoryName, userAccount);
        const commitBuilder = repository.createCommitBuilder();

        commitBuilder.createFile(filePath, fileContent);

        const result = await commitBuilder.readFile(filePath);

        expect(result).toBe(fileContent);
      });

      it("should be able to read updated file content before it's committed", async () => {
        const fileContent = "temp content not to be committed";

        const repository = client.getRepository(repositoryName, userAccount);
        const commitBuilder = repository.createCommitBuilder();

        commitBuilder.updateFile(testFilePath, fileContent);

        const result = await commitBuilder.readFile(testFilePath);

        expect(result).toBe(fileContent);
      });

      it("should be able to read original file content from the repository before the commit builder is committed", async () => {
        const fileContent = "temp content not to be committed";
        const fileContentBeforeCommitBuilderIsUsed = updatedTextFileContent;

        const repository = client.getRepository(repositoryName, userAccount);
        const commitBuilder = repository.createCommitBuilder();

        commitBuilder.updateFile(testFilePath, fileContent);

        const result = await repository.readFile(testFilePath);

        expect(result).toBe(fileContentBeforeCommitBuilderIsUsed);
      });

      it("should be able to read file content from a file unrelated to the commit builder", async () => {
        const fileContentBeforeCommitBuilderIsUsed = updatedTextFileContent;

        const repository = client.getRepository(repositoryName, userAccount);
        const commitBuilder = repository.createCommitBuilder();

        const result = await commitBuilder.readFile(testFilePath);

        expect(result).toBe(fileContentBeforeCommitBuilderIsUsed);
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
