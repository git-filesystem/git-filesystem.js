import { Octokit } from "octokit";
import { GitUser } from "../../src/client";
import { GitHubClient } from "../../src/github/github-client";
import { GitHubRepository } from "../../src/github/github-repository";
import { createRepository } from "../../src/github/gql/create-repository";
import { getAllRepositories } from "../../src/github/gql/get-all-repositories";
import { getAllRepositoriesForOwner } from "../../src/github/gql/get-all-repositories-for-owner";
import { isRepositoryArchived } from "../../src/github/gql/is-repository-archived";
import { deleteRepo } from "../../src/github/rest/delete-repo";
import { JsonConfig } from "../../src/repository";
import { setupOctokit } from "../../__mocks__/octokit";

jest.mock("octokit");

jest.mock("../../src/github/gql/get-all-repositories-for-owner");
jest.mock("../../src/github/gql/get-all-repositories");
jest.mock("../../src/github/gql/is-repository-archived");
jest.mock("../../src/github/gql/create-repository");
jest.mock("../../src/github/rest/delete-repo");

describe("github-client", () => {
  const mockedOctokit = jest.mocked(Octokit);

  const mockedGetAllRepositoriesForOwner = jest.mocked(getAllRepositoriesForOwner);
  const mockedGetAllRepositories = jest.mocked(getAllRepositories);
  const mockedIsRepositoryArchived = jest.mocked(isRepositoryArchived);
  const mockedCreateRepository = jest.mocked(createRepository);
  const mockedDeleteRepo = jest.mocked(deleteRepo);

  beforeEach(() => jest.resetAllMocks());
  beforeEach(setupOctokit);
  afterAll(() => jest.restoreAllMocks());

  describe("constructor", () => {
    it("should pass the accessToken to octokit", () => {
      const accessToken = "123";

      new GitHubClient("any owner", accessToken, "any app");

      expect(mockedOctokit).toHaveBeenCalledWith(expect.objectContaining({ auth: accessToken }));
    });

    it("should pass the applicationName to octokit", () => {
      const applicationName = "any app";

      new GitHubClient("any owner", "any accessToken", applicationName);

      expect(mockedOctokit).toHaveBeenCalledWith(
        expect.objectContaining({ userAgent: applicationName })
      );
    });
  });

  describe("getAllRepositories", () => {
    it("should call getAllRepositoriesForOwner if the owner is given", async () => {
      const client = new GitHubClient("any owner", "any token", "any app");

      await client.getAllRepositories("any owner");

      expect(mockedGetAllRepositoriesForOwner).toHaveBeenCalledTimes(1);
    });

    it("should return the result of getAllRepositoriesForOwner if the owner is given", async () => {
      const expectedResult = ["any repo"];

      const client = new GitHubClient("any owner", "any token", "any app");

      mockedGetAllRepositoriesForOwner.mockResolvedValueOnce(expectedResult);

      const result = await client.getAllRepositories("any owner");

      expect(result).toEqual(expectedResult);
    });

    it("should not call getAllRepositories if the owner is given", async () => {
      const client = new GitHubClient("any owner", "any token", "any app");

      await client.getAllRepositories("any owner");

      expect(mockedGetAllRepositories).not.toHaveBeenCalled();
    });

    it("should call getAllRepositories if the owner is not given", async () => {
      const client = new GitHubClient("any owner", "any token", "any app");

      await client.getAllRepositories();

      expect(mockedGetAllRepositories).toHaveBeenCalledTimes(1);
    });

    it("should return the result of getAllRepositories if the owner is not given", async () => {
      const expectedResult = ["any repo"];

      const client = new GitHubClient("any owner", "any token", "any app");

      mockedGetAllRepositories.mockResolvedValueOnce(expectedResult);

      const result = await client.getAllRepositories();

      expect(result).toEqual(expectedResult);
    });

    it("should not call getAllRepositoriesForOwner if the owner is not given", async () => {
      const client = new GitHubClient("any owner", "any token", "any app");

      await client.getAllRepositories();

      expect(mockedGetAllRepositoriesForOwner).not.toHaveBeenCalled();
    });
  });

  describe("getRepository", () => {
    it("should return a GitHubRepository with the client owner if an owner is not given", () => {
      const authorDetails: GitUser = { name: "any name", email: "any email" };
      const committerDetails: GitUser = { name: "any name", email: "any email" };
      const jsonConfig: JsonConfig = { prettyFormat: false };

      const client = new GitHubClient(
        "any owner",
        "any accessToken",
        "any app",
        authorDetails,
        committerDetails,
        jsonConfig
      );

      const repository = client.getRepository("any repo") as GitHubRepository;

      expect(repository.provider).toBe("github");
      expect(repository.owner).toBe("any owner");
      expect(repository.repositoryName).toBe("any repo");
      expect(repository.accessToken).toBe("any accessToken");
      expect(repository.applicationName).toBe("any app");
      expect(repository.authorDetails).toBe(authorDetails);
      expect(repository.committerDetails).toBe(committerDetails);
      expect(repository.jsonConfig).toBe(jsonConfig);
    });

    it("should return a GitHubRepository with the given owner if an owner is given", () => {
      const givenOwner = "a different owner";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      const repository = client.getRepository("any repo", givenOwner) as GitHubRepository;

      expect(repository.owner).toBe(givenOwner);
    });
  });

  describe("doesRepositoryExist", () => {
    it("should call isRepositoryArchived", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.doesRepositoryExist("any repo");

      expect(mockedIsRepositoryArchived).toHaveBeenCalledTimes(1);
    });

    it("should call isRepositoryArchived with the access token", async () => {
      const accessToken = "any accessToken";
      const client = new GitHubClient("any owner", accessToken, "any app");

      await client.doesRepositoryExist("any repo");

      expect(mockedIsRepositoryArchived).toHaveBeenCalledTimes(1);
      expect(mockedIsRepositoryArchived).toHaveBeenCalledWith(
        accessToken,
        expect.anything(),
        expect.anything()
      );
    });

    it("should call isRepositoryArchived with the owner", async () => {
      const owner = "any owner";
      const client = new GitHubClient(owner, "any accessToken", "any app");

      await client.doesRepositoryExist("any repo");

      expect(mockedIsRepositoryArchived).toHaveBeenCalledTimes(1);
      expect(mockedIsRepositoryArchived).toHaveBeenCalledWith(
        expect.anything(),
        owner,
        expect.anything()
      );
    });

    it("should call isRepositoryArchived with the repository name", async () => {
      const repoName = "any repo";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.doesRepositoryExist(repoName);

      expect(mockedIsRepositoryArchived).toHaveBeenCalledTimes(1);
      expect(mockedIsRepositoryArchived).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        repoName
      );
    });

    it("should return 'IsArchived' if isRepositoryArchived returns true", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      mockedIsRepositoryArchived.mockResolvedValueOnce(true);

      const result = await client.doesRepositoryExist("any repo");

      expect(result).toBe("IsArchived");
    });

    it("should return 'Exists' if isRepositoryArchived returns false", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      mockedIsRepositoryArchived.mockResolvedValueOnce(false);

      const result = await client.doesRepositoryExist("any repo");

      expect(result).toBe("Exists");
    });

    it("should return 'DoesNotExist' if isRepositoryArchived throws an error", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      mockedIsRepositoryArchived.mockRejectedValueOnce(new Error("any error"));

      const result = await client.doesRepositoryExist("any repo");

      expect(result).toBe("DoesNotExist");
    });
  });

  describe("createRepository", () => {
    it("should call createRepository", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository("any repo", false, "any description");

      expect(mockedCreateRepository).toHaveBeenCalledTimes(1);
    });

    it("should call createRepository with the access token", async () => {
      const accessToken = "any accessToken";

      const client = new GitHubClient("any owner", accessToken, "any app");

      await client.createRepository("any repo", false, "any description");

      expect(mockedCreateRepository).toHaveBeenCalledTimes(1);
      expect(mockedCreateRepository).toHaveBeenCalledWith(
        accessToken,
        expect.anything(),
        expect.anything(),
        expect.anything(),
        expect.anything()
      );
    });

    it("should call createRepository with the repository name", async () => {
      const repoName = "any repo";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository(repoName, false, "any description");

      expect(mockedCreateRepository).toHaveBeenCalledTimes(1);
      expect(mockedCreateRepository).toHaveBeenCalledWith(
        expect.anything(),
        repoName,
        expect.anything(),
        expect.anything(),
        expect.anything()
      );
    });

    it("should call createRepository with the owner", async () => {
      const owner = "any owner";
      const client = new GitHubClient(owner, "any accessToken", "any app");

      await client.createRepository("any repo", false, "any description");

      expect(mockedCreateRepository).toHaveBeenCalledTimes(1);
      expect(mockedCreateRepository).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        owner,
        expect.anything(),
        expect.anything()
      );
    });

    [true, false].forEach(privateRepository => {
      it(`should call createRepository with the private flag ${privateRepository}`, async () => {
        const client = new GitHubClient("any owner", "any accessToken", "any app");

        await client.createRepository("any repo", privateRepository, "any description");

        expect(mockedCreateRepository).toHaveBeenCalledTimes(1);
        expect(mockedCreateRepository).toHaveBeenCalledWith(
          expect.anything(),
          expect.anything(),
          expect.anything(),
          privateRepository,
          expect.anything()
        );
      });
    });

    it("should call createRepository with the description", async () => {
      const description = "any description";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository("any repo", false, description);

      expect(mockedCreateRepository).toHaveBeenCalledTimes(1);
      expect(mockedCreateRepository).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        expect.anything(),
        expect.anything(),
        description
      );
    });

    it("should return a repository", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      const result = await client.createRepository("any repo", false, "any description");

      expect(result).toEqual(
        expect.objectContaining({
          owner: "any owner",
          repositoryName: "any repo",
          accessToken: "any accessToken",
          applicationName: "any app"
        })
      );
    });
  });

  describe("searchRepositoriesByFile", () => {
    it.todo("should do stuff");
  });

  describe("deleteRepository", () => {
    it("should call deleteRepo", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.deleteRepository("any repo");

      expect(mockedDeleteRepo).toHaveBeenCalledTimes(1);
    });

    it("should call deleteRepo with the access token", async () => {
      const accessToken = "any accessToken";

      const client = new GitHubClient("any owner", accessToken, "any app");

      await client.deleteRepository("any repo");

      expect(mockedDeleteRepo).toHaveBeenCalledTimes(1);
      expect(mockedDeleteRepo).toHaveBeenCalledWith(
        accessToken,
        expect.anything(),
        expect.anything()
      );
    });

    it("should call deleteRepo with the owner", async () => {
      const owner = "any owner";

      const client = new GitHubClient(owner, "any accessToken", "any app");

      await client.deleteRepository("any repo");

      expect(mockedDeleteRepo).toHaveBeenCalledTimes(1);
      expect(mockedDeleteRepo).toHaveBeenCalledWith(expect.anything(), owner, expect.anything());
    });

    it("should call deleteRepo with the repository name", async () => {
      const repoName = "any repo";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.deleteRepository(repoName);

      expect(mockedDeleteRepo).toHaveBeenCalledTimes(1);
      expect(mockedDeleteRepo).toHaveBeenCalledWith(expect.anything(), expect.anything(), repoName);
    });
  });
});
