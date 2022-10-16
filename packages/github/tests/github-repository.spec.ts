import { FullyQualifiedBranch, FullyQualifiedTagRef } from "@git-filesystem/abstractions";
import { GitHubCommitBuilder } from "../src/lib/github-commit-builder";
import { GitHubRepository } from "../src/lib/github-repository";
import { createTag } from "../src/lib/gql/create-tag";
import { deleteTag } from "../src/lib/gql/delete-tag";
import { getAllTags } from "../src/lib/gql/get-all-tags";
import { getFileContent } from "../src/lib/gql/get-file-content";
import { getRefIdForTag } from "../src/lib/gql/get-ref-id-for-tag";

jest.mock("../src/lib/github-commit-builder", () => ({
  GitHubCommitBuilder: jest.fn()
}));

jest.mock("../src/lib/gql/get-file-content", () => ({
  getFileContent: jest.fn()
}));

jest.mock("../src/lib/gql/create-tag", () => ({
  createTag: jest.fn()
}));

jest.mock("../src/lib/gql/get-all-tags", () => ({
  getAllTags: jest.fn()
}));

jest.mock("../src/lib/gql/delete-tag", () => ({
  deleteTag: jest.fn()
}));

jest.mock("../src/lib/gql/get-ref-id-for-tag", () => ({
  getRefIdForTag: jest.fn()
}));

describe("GitHubRepository", () => {
  const mockCommitBuilder = {
    createFile: jest.fn(),
    updateFile: jest.fn(),
    createCommit: jest.fn(),
    deleteFile: jest.fn(),
    createJsonFile: jest.fn(),
    updateJsonFile: jest.fn()
  } as unknown as GitHubCommitBuilder;

  const mockedGetFileContent = jest.mocked(getFileContent);
  const mockedCreateTag = jest.mocked(createTag);
  const mockedGetAllTags = jest.mocked(getAllTags);
  const mockedDeleteTag = jest.mocked(deleteTag);
  const mockedGetRefIdForTag = jest.mocked(getRefIdForTag);

  const accessToken = "access token";
  const fqBranch: FullyQualifiedBranch = {
    refType: "branch",
    owner: "owner",
    repositoryName: "repository-name",
    ref: "refs/heads/branch-name"
  };
  const applicationName = "application name";

  let repository: GitHubRepository;

  beforeEach(() => {
    jest.resetAllMocks();

    jest.mocked(GitHubCommitBuilder).mockImplementation(() => mockCommitBuilder);

    repository = new GitHubRepository(accessToken, fqBranch, applicationName);
  });

  describe("provider", () => {
    it("should have the provider 'github'", () => {
      expect(repository.provider).toBe("github");
    });
  });

  describe("createFile", () => {
    it("should create the file using a commitBuilder", async () => {
      const path = "path";
      const content = "content";

      await repository.createFile(path, content);

      expect(mockCommitBuilder.createFile).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createFile).toHaveBeenCalledWith(path, content);
    });

    it("should commit the commitBuilder with a commit message saying it creates the file", async () => {
      const path = "path";
      const content = "content";

      await repository.createFile(path, content);

      expect(mockCommitBuilder.createCommit).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createCommit).toHaveBeenCalledWith("Create " + path);
    });
  });

  describe("updateFile", () => {
    it("should update the file using a commitBuilder", async () => {
      const path = "path";
      const content = "content";

      await repository.updateFile(path, content);

      expect(mockCommitBuilder.updateFile).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.updateFile).toHaveBeenCalledWith(path, content);
    });

    it("should commit the commitBuilder with a commit message saying it updates the file", async () => {
      const path = "path";
      const content = "content";

      await repository.updateFile(path, content);

      expect(mockCommitBuilder.createCommit).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createCommit).toHaveBeenCalledWith("Update " + path);
    });
  });

  describe("readFile", () => {
    it("should call getFileContent with the accessToken", async () => {
      const path = "path";

      await repository.readFile(path);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        accessToken,
        expect.anything(),
        expect.anything()
      );
    });

    it("should call getFileContent with the fqBranch if no tagName is given", async () => {
      const path = "path";

      await repository.readFile(path);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        expect.anything(),
        fqBranch,
        expect.anything()
      );
    });

    it("should call getFileContent with a given tag if it is fully qualified", async () => {
      const path = "path";
      const fullyQualifiedTag: FullyQualifiedTagRef = "refs/tags/given-tag";

      await repository.readFile(path, fullyQualifiedTag);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          ref: fullyQualifiedTag
        }),
        expect.anything()
      );
    });

    it("should call getFileContent with the fully qualified version of a tag if it is not fully qualified", async () => {
      const path = "path";
      const notFullyQualifiedTag = "given-tag";

      await repository.readFile(path, notFullyQualifiedTag);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          ref: "refs/tags/" + notFullyQualifiedTag
        }),
        expect.anything()
      );
    });

    it("should call getFileContent with the given path", async () => {
      const path = "path";

      await repository.readFile(path);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(expect.anything(), expect.anything(), path);
    });

    it("should return the file content", async () => {
      const path = "path";
      const content = "content";

      mockedGetFileContent.mockResolvedValue(content);

      const result = await repository.readFile(path);

      expect(result).toBe(content);
    });
  });

  describe("deleteFile", () => {
    it("should delete the file using a commitBuilder", async () => {
      const path = "path";

      await repository.deleteFile(path);

      expect(mockCommitBuilder.deleteFile).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.deleteFile).toHaveBeenCalledWith(path);
    });

    it("should commit the commitBuilder with a commit message saying it deletes the file", async () => {
      const path = "path";

      await repository.deleteFile(path);

      expect(mockCommitBuilder.createCommit).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createCommit).toHaveBeenCalledWith("Delete " + path);
    });
  });

  describe("createJsonFile", () => {
    it("should create the json file using a commitBuilder", async () => {
      const path = "path";
      const content = { content: "content" };

      await repository.createJsonFile(path, content);

      expect(mockCommitBuilder.createJsonFile).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createJsonFile).toHaveBeenCalledWith(path, content);
    });

    it("should commit the commitBuilder with a commit message saying it creates the file", async () => {
      const path = "path";
      const content = { content: "content" };

      await repository.createJsonFile(path, content);

      expect(mockCommitBuilder.createCommit).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createCommit).toHaveBeenCalledWith("Create " + path);
    });
  });

  describe("updateJsonFile", () => {
    it("should update the json file using a commitBuilder", async () => {
      const path = "path";
      const content = { content: "content" };

      await repository.updateJsonFile(path, content);

      expect(mockCommitBuilder.updateJsonFile).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.updateJsonFile).toHaveBeenCalledWith(path, content);
    });

    it("should commit the commitBuilder with a commit message saying it updates the file", async () => {
      const path = "path";
      const content = { content: "content" };

      await repository.updateJsonFile(path, content);

      expect(mockCommitBuilder.createCommit).toHaveBeenCalledTimes(1);
      expect(mockCommitBuilder.createCommit).toHaveBeenCalledWith("Update " + path);
    });
  });

  describe("readJsonFile", () => {
    it("should call getFileContent with the accessToken", async () => {
      const path = "path";
      const content = `{ "content": "content" }`;

      mockedGetFileContent.mockResolvedValue(content);

      await repository.readJsonFile(path);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        accessToken,
        expect.anything(),
        expect.anything()
      );
    });

    it("should call getFileContent with the fqBranch if no tagName is given", async () => {
      const path = "path";
      const content = `{ "content": "content" }`;

      mockedGetFileContent.mockResolvedValue(content);

      await repository.readJsonFile(path);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        expect.anything(),
        fqBranch,
        expect.anything()
      );
    });

    it("should call getFileContent with a given tag if it is fully qualified", async () => {
      const path = "path";
      const fullyQualifiedTag: FullyQualifiedTagRef = "refs/tags/given-tag";
      const content = `{ "content": "content" }`;

      mockedGetFileContent.mockResolvedValue(content);

      await repository.readJsonFile(path, fullyQualifiedTag);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          ref: fullyQualifiedTag
        }),
        expect.anything()
      );
    });

    it("should call getFileContent with the fully qualified version of a tag if it is not fully qualified", async () => {
      const path = "path";
      const notFullyQualifiedTag = "given-tag";
      const content = `{ "content": "content" }`;

      mockedGetFileContent.mockResolvedValue(content);

      await repository.readJsonFile(path, notFullyQualifiedTag);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          ref: "refs/tags/" + notFullyQualifiedTag
        }),
        expect.anything()
      );
    });

    it("should call getFileContent with the given path", async () => {
      const path = "path";
      const content = `{ "content": "content" }`;

      mockedGetFileContent.mockResolvedValue(content);

      await repository.readJsonFile(path);

      expect(mockedGetFileContent).toHaveBeenCalledTimes(1);
      expect(mockedGetFileContent).toHaveBeenCalledWith(expect.anything(), expect.anything(), path);
    });

    it("should return the file content as an object", async () => {
      const path = "path";
      const content = `{ "content": "content" }`;

      mockedGetFileContent.mockResolvedValue(content);

      const result = await repository.readJsonFile(path);

      expect(result).toStrictEqual(JSON.parse(content));
    });
  });

  describe("createTag", () => {
    it("should call the createTag gql function with the access token", async () => {
      const name = "name";

      await repository.createTag(name);

      expect(mockedCreateTag).toHaveBeenCalledTimes(1);
      expect(mockedCreateTag).toHaveBeenCalledWith(
        accessToken,
        expect.anything(),
        expect.anything()
      );
    });

    it("should call the createTag gql function with the fqBranch", async () => {
      const name = "name";

      await repository.createTag(name);

      expect(mockedCreateTag).toHaveBeenCalledTimes(1);
      expect(mockedCreateTag).toHaveBeenCalledWith(expect.anything(), fqBranch, expect.anything());
    });

    it("should call the createTag gql function with the tag name if it's fully qualified", async () => {
      const fullyQualifiedTagName = "refs/tags/tag-name";

      await repository.createTag(fullyQualifiedTagName);

      expect(mockedCreateTag).toHaveBeenCalledTimes(1);
      expect(mockedCreateTag).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        fullyQualifiedTagName
      );
    });

    it("should call the createTag gql function with the fully qualified version of the tag name if it's not fully qualified", async () => {
      const notFullyQualifiedTagName = "tag-name";

      await repository.createTag(notFullyQualifiedTagName);

      expect(mockedCreateTag).toHaveBeenCalledTimes(1);
      expect(mockedCreateTag).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        "refs/tags/" + notFullyQualifiedTagName
      );
    });

    it("should return a fully qualified tag", async () => {
      const name = "name";

      const result = await repository.createTag(name);

      expect(result).toStrictEqual({
        refType: "tag",
        owner: fqBranch.owner,
        repositoryName: fqBranch.repositoryName,
        ref: "refs/tags/" + name
      });
    });
  });

  describe("getAllTags", () => {
    it("should return all the tags from the getAllTags gql function", async () => {
      const tagRefs: FullyQualifiedTagRef[] = [
        "refs/tags/tag1",
        "refs/tags/tag2",
        "refs/tags/tag3"
      ];

      mockedGetAllTags.mockResolvedValue(tagRefs);

      const results = await repository.getAllTags();

      expect(results).toHaveLength(tagRefs.length);

      results.forEach((result, i) => {
        expect(result.refType).toBe("tag");
        expect(result.owner).toBe(fqBranch.owner);
        expect(result.repositoryName).toBe(fqBranch.repositoryName);
        expect(result.ref).toBe(tagRefs[i]);
      });
    });
  });

  describe("deleteTag", () => {
    it("should call getRefIdForTag with the access token", async () => {
      const name = "name";

      await repository.deleteTag(name);

      expect(mockedGetRefIdForTag).toHaveBeenCalledTimes(1);
      expect(mockedGetRefIdForTag).toHaveBeenCalledWith(accessToken, expect.anything());
    });

    it("should call getRefIdForTag with a fully qualified tag for the tag name when it's fully qualified", async () => {
      const fullyQualifiedTagName: FullyQualifiedTagRef = "refs/tags/tag-name";

      await repository.deleteTag(fullyQualifiedTagName);

      expect(mockedGetRefIdForTag).toHaveBeenCalledTimes(1);
      expect(mockedGetRefIdForTag).toHaveBeenCalledWith(expect.anything(), {
        refType: "tag",
        owner: fqBranch.owner,
        repositoryName: fqBranch.repositoryName,
        ref: fullyQualifiedTagName
      });
    });

    it("should call getRefIdForTag with a fully qualified tag for the tag name when it's not fully qualified", async () => {
      const notFullyQualifiedTagName = "tag-name";

      await repository.deleteTag(notFullyQualifiedTagName);

      expect(mockedGetRefIdForTag).toHaveBeenCalledTimes(1);
      expect(mockedGetRefIdForTag).toHaveBeenCalledWith(expect.anything(), {
        refType: "tag",
        owner: fqBranch.owner,
        repositoryName: fqBranch.repositoryName,
        ref: "refs/tags/" + notFullyQualifiedTagName
      });
    });

    it("should call the deleteTag gql function with the access token", async () => {
      const name = "name";
      const id = "id";

      mockedGetRefIdForTag.mockResolvedValue(id);

      await repository.deleteTag(name);

      expect(mockedDeleteTag).toHaveBeenCalledTimes(1);
      expect(mockedDeleteTag).toHaveBeenCalledWith(accessToken, expect.anything());
    });

    it("should call the deleteTag gql function with the result of getRefIdForTag", async () => {
      const name = "name";
      const id = "id";

      mockedGetRefIdForTag.mockResolvedValue(id);

      await repository.deleteTag(name);

      expect(mockedDeleteTag).toHaveBeenCalledTimes(1);
      expect(mockedDeleteTag).toHaveBeenCalledWith(expect.anything(), id);
    });
  });
});
