import { GitUser, JsonConfig } from "@git-filesystem/abstractions";
import { GitHubClient } from "../src/lib/github-client";
import { GitHubRepository } from "../src/lib/github-repository";
import { createRepository } from "../src/lib/gql/create-repository";
import { getAllRepositories } from "../src/lib/gql/get-all-repositories";
import { getAllRepositoriesForOwner } from "../src/lib/gql/get-all-repositories-for-owner";
import { isRepositoryArchived } from "../src/lib/gql/is-repository-archived";
import { deleteRepo } from "../src/lib/rest/delete-repo";

jest.mock("../src/lib/gql/create-repository", () => ({
  createRepository: jest.fn()
}));
jest.mock("../src/lib/gql/get-all-repositories", () => ({
  getAllRepositories: jest.fn()
}));
jest.mock("../src/lib/gql/get-all-repositories-for-owner", () => ({
  getAllRepositoriesForOwner: jest.fn()
}));
jest.mock("../src/lib/gql/is-repository-archived", () => ({
  isRepositoryArchived: jest.fn()
}));
jest.mock("../src/lib/rest/delete-repo", () => ({
  deleteRepo: jest.fn()
}));

describe("github-client", () => {
  const mockedGetAllRepositoriesForOwner = jest.mocked(getAllRepositoriesForOwner);
  const mockedGetAllRepositories = jest.mocked(getAllRepositories);
  const mockedIsRepositoryArchived = jest.mocked(isRepositoryArchived);
  const mockedCreateRepository = jest.mocked(createRepository);
  const mockedDeleteRepo = jest.mocked(deleteRepo);

  beforeEach(() => jest.resetAllMocks());
  afterAll(() => jest.restoreAllMocks());

  describe("getAllRepositories", () => {
    it("should call getAllRepositoriesForOwner with the correct params if the owner is given", async () => {
      const token = "any token";
      const owner = "any owner";

      const client = new GitHubClient(owner, token, "any app");

      await client.getAllRepositories(owner);

      expect(mockedGetAllRepositoriesForOwner).toHaveBeenCalledTimes(1);
      expect(mockedGetAllRepositoriesForOwner).toHaveBeenCalledWith(token, owner);
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

    it("should call getAllRepositories  with the correct params if the owner is not given", async () => {
      const token = "any token";

      const client = new GitHubClient("any owner", token, "any app");

      await client.getAllRepositories();

      expect(mockedGetAllRepositories).toHaveBeenCalledTimes(1);
      expect(mockedGetAllRepositories).toHaveBeenCalledWith(token);
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
    it("should return a GitHubRepository with the given params", () => {
      const differentOwner = "a different owner";

      const authorDetails: GitUser = {
        name: "author name",
        email: "author email"
      };
      const committerDetails: GitUser = {
        name: "committer name",
        email: "committer email"
      };

      const client = new GitHubClient(
        "any owner",
        "any accessToken",
        "any app",
        authorDetails,
        committerDetails
      );

      const repository = client.getRepository("any repo", differentOwner) as GitHubRepository;

      expect(repository.provider).toBe("github");
      expect(repository.fqBranch.owner).toBe(differentOwner);
      expect(repository.fqBranch.repositoryName).toBe("any repo");
      expect(repository.accessToken).toBe("any accessToken");
      expect(repository.applicationName).toBe("any app");
      expect(repository.authorDetails).toEqual(authorDetails);
      expect(repository.committerDetails).toEqual(committerDetails);
    });

    it("should return a GitHubRepository with the client owner if an owner is not given", () => {
      const ownerPassedIntoClient = "owner passed into client";

      const authorDetails: GitUser = { name: "any name", email: "any email" };
      const committerDetails: GitUser = {
        name: "any name",
        email: "any email"
      };
      const jsonConfig: JsonConfig = { prettyFormat: false };

      const client = new GitHubClient(
        ownerPassedIntoClient,
        "any accessToken",
        "any app",
        authorDetails,
        committerDetails,
        jsonConfig
      );

      const repository = client.getRepository("any repo") as GitHubRepository;

      expect(repository.fqBranch.owner).toBe(ownerPassedIntoClient);
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
          fqBranch: expect.objectContaining({
            owner: "any owner",
            repositoryName: "any repo"
          }),
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
