import { Octokit } from "octokit";
import { GitUser } from "../../src/client";
import { GitHubClient } from "../../src/github/github-client";
import { GitHubRepository } from "../../src/github/github-repository";
import { createRepositoryMutation } from "../../src/github/gql/create-repository";
import { doesRepositoryExistQuery } from "../../src/github/gql/does-repository-exist";
import { JsonConfig } from "../../src/repository";
import {
  mockedGraphql,
  mockedRest_repos_delete,
  mockedRest_search_code,
  setupOctokit
} from "../../__mocks__/octokit";

jest.mock("octokit");
jest.mock("../../src/github/github-repository");

describe("github-client", () => {
  const mockedOctokit = jest.mocked(Octokit);

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

  describe("getRepository", () => {
    it("should return a GitHubRepository", () => {
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
  });

  describe("doesRepositoryExist", () => {
    it("should call the github graphql endpoint with the doesRepositoryExist query", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.doesRepositoryExist("any repo");

      expect(mockedGraphql).toHaveBeenCalledWith(doesRepositoryExistQuery, expect.anything());
    });

    it("should call the github graphql endpoint with the name variable", async () => {
      const repoName = "any repo";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.doesRepositoryExist(repoName);

      expect(mockedGraphql).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ name: repoName })
      );
    });

    it("should call the github graphql endpoint with the owner variable", async () => {
      const owner = "any owner";

      const client = new GitHubClient(owner, "any accessToken", "any app");

      await client.doesRepositoryExist("any repo");

      expect(mockedGraphql).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ owner })
      );
    });

    it("should return 'Exists' if the query does not throw and is not archived", async () => {
      mockedGraphql.mockResolvedValue({
        repository: {
          isArchived: false
        }
      });

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      const result = await client.doesRepositoryExist("any repo");

      expect(result).toBe("Exists");
    });

    it("should return 'IsArchived' if the query does not throw and is archived", async () => {
      mockedGraphql.mockResolvedValue({
        repository: {
          isArchived: true
        }
      });

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      const result = await client.doesRepositoryExist("any repo");

      expect(result).toBe("IsArchived");
    });

    it("should return 'DoesNotExist' if the query throws", async () => {
      mockedGraphql.mockRejectedValue("anything");

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      const result = await client.doesRepositoryExist("any repo");

      expect(result).toBe("DoesNotExist");
    });
  });

  describe("createRepository", () => {
    it("should call the github graphql endpoint with the createRepository mutation", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository("any repo", false, "any description");

      expect(mockedGraphql).toHaveBeenCalledWith(createRepositoryMutation, expect.anything());
    });

    it("should call the github graphql endpoint with the name variable", async () => {
      const repoName = "any repo";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository(repoName, false, "any description");

      expect(mockedGraphql).toHaveBeenCalledWith(expect.anything(), {
        input: expect.objectContaining({ name: repoName })
      });
    });

    it("should call the github graphql endpoint with the visibility variable of 'PRIVATE' if isPrivate is true", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository("any repo", true, "any description");

      expect(mockedGraphql).toHaveBeenCalledWith(expect.anything(), {
        input: expect.objectContaining({ visibility: "PRIVATE" })
      });
    });

    it("should call the github graphql endpoint with the visibility variable of 'PUBLIC' if isPrivate is false", async () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository("any repo", false, "any description");

      expect(mockedGraphql).toHaveBeenCalledWith(expect.anything(), {
        input: expect.objectContaining({ visibility: "PUBLIC" })
      });
    });

    it("should call the github graphql endpoint with the description variable", async () => {
      const description = "any description";

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      await client.createRepository("any repo", false, description);

      expect(mockedGraphql).toHaveBeenCalledWith(expect.anything(), {
        input: expect.objectContaining({ description })
      });
    });

    it("should call the github graphql endpoint with the template variable set to false", () => {
      const client = new GitHubClient("any owner", "any accessToken", "any app");

      client.createRepository("any repo", false, "any description");

      expect(mockedGraphql).toHaveBeenCalledWith(expect.anything(), {
        input: expect.objectContaining({ template: false })
      });
    });

    it("should return a GitHub repository if the query does not throw", async () => {
      const authorDetails: GitUser = { name: "any name", email: "any email" };
      const committerDetails: GitUser = { name: "any name", email: "any email" };
      const jsonConfig: JsonConfig = { prettyFormat: false };

      mockedGraphql.mockResolvedValue("anything");

      const client = new GitHubClient(
        "any owner",
        "any accessToken",
        "any app",
        authorDetails,
        committerDetails,
        jsonConfig
      );

      const result = await client.createRepository("any repo", false, "any description");

      expect(result).toBeTruthy();

      const githubResult = result as GitHubRepository;

      expect(githubResult.provider).toBe("github");
      expect(githubResult.owner).toBe("any owner");
      expect(githubResult.repositoryName).toBe("any repo");
      expect(githubResult.accessToken).toBe("any accessToken");
      expect(githubResult.applicationName).toBe("any app");
      expect(githubResult.authorDetails).toBe(authorDetails);
      expect(githubResult.committerDetails).toBe(committerDetails);
      expect(githubResult.jsonConfig).toBe(jsonConfig);
    });
  });

  describe("searchRepositoriesByFile", () => {
    ["myFile.txt", "myFile.js"].forEach(fileName =>
      it(`should call the search code rest endpoint with a query for the given file name: ${fileName}`, async () => {
        const fileContent = "any file content";

        mockedRest_search_code.mockResolvedValue({
          data: { items: [] }
        });

        const client = new GitHubClient("any owner", "any accessToken", "any app");

        await client.searchRepositoriesByFile(fileName, fileContent);

        expect(mockedRest_search_code).toHaveBeenCalledWith(
          expect.objectContaining({ q: expect.stringContaining(`filename:${fileName}`) })
        );
      })
    );

    ["owner", "differentOwner"].forEach(owner =>
      it(`should call the search code rest endpoint with a query for the owner: ${owner}`, () => {
        mockedRest_search_code.mockResolvedValue({
          data: { items: [] }
        });

        const client = new GitHubClient(owner, "any accessToken", "any app");

        client.searchRepositoriesByFile("any file", "any file content");

        expect(mockedRest_search_code).toHaveBeenCalledWith(
          expect.objectContaining({ q: expect.stringContaining(owner) })
        );
      })
    );

    ["my content", "different content"].forEach(fileContent =>
      it(`should call the search code rest endpoint with a query for the given file content: ${fileContent}`, async () => {
        mockedRest_search_code.mockResolvedValue({
          data: { items: [] }
        });

        const client = new GitHubClient("any owner", "any accessToken", "any app");

        await client.searchRepositoriesByFile("any file name", fileContent);

        expect(mockedRest_search_code).toHaveBeenCalledWith(
          expect.objectContaining({ q: expect.stringContaining(`${fileContent}`) })
        );
      })
    );

    it("should return the names of the returned repositories", async () => {
      const items = [
        { repository: { name: "any repo 1" } },
        { repository: { name: "any repo 2" } }
      ];

      mockedRest_search_code.mockResolvedValue({
        data: { items }
      });

      const client = new GitHubClient("any owner", "any accessToken", "any app");

      const result = await client.searchRepositoriesByFile("any file", "any file content");

      expect(result).toEqual(["any repo 1", "any repo 2"]);
    });
  });

  describe("deleteRepository", () => {
    ["owner", "differentOwner"].forEach(owner =>
      it(`should call the repos delete rest endpoint with the owner: ${owner}`, async () => {
        mockedRest_repos_delete.mockResolvedValue({
          status: 204
        });

        const client = new GitHubClient(owner, "any accessToken", "any app");

        await client.deleteRepository("any repo");

        expect(mockedRest_repos_delete).toHaveBeenCalledWith(expect.objectContaining({ owner }));
      })
    );

    ["any repo", "different repo"].forEach(repo =>
      it(`should call the repos delete rest endpoint with the repo: ${repo}`, async () => {
        mockedRest_repos_delete.mockResolvedValue({
          status: 204
        });

        const client = new GitHubClient("any owner", "any accessToken", "any app");

        await client.deleteRepository(repo);

        expect(mockedRest_repos_delete).toHaveBeenCalledWith(expect.objectContaining({ repo }));
      })
    );

    [200, 300, 400, 500].forEach(status =>
      it(`should throw if the response status is not 204 ("${status})`, async () => {
        mockedRest_repos_delete.mockResolvedValue({
          status
        });

        const client = new GitHubClient("any owner", "any accessToken", "any app");

        await expect(client.deleteRepository("any repo")).rejects.toThrowError(
          `Failed to delete repository, received status code: ${status}`
        );
      })
    );
  });
});
