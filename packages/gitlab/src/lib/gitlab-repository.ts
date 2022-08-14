import {
  createFullyQualifiedTag,
  FullyQualifiedBranch,
  FullyQualifiedRef,
  FullyQualifiedTag,
  GitUser,
  JsonConfig,
  Provider,
  Repository
} from "@gitbuckets/abstractions";
import { GitLabCommitBuilder } from "./gitlab-commit-builder";
import { allTags } from "./rest/all-tags";
import { createTag } from "./rest/create-tag";
import { deleteTag } from "./rest/delete-tag";
import { getFileContent } from "./rest/get-file-content";

export class GitLabRepository implements Repository {
  provider: Provider = "gitlab";

  public constructor(
    public readonly accessToken: string,
    public readonly fqBranch: FullyQualifiedBranch,
    public readonly applicationName: string,
    public readonly authorDetails?: GitUser,
    public readonly committerDetails?: GitUser,
    public readonly jsonConfig?: JsonConfig
  ) {}

  async createFile(path: string, content: string): Promise<string> {
    const commitBuilder = new GitLabCommitBuilder(this);
    commitBuilder.createFile(path, content);

    const commitMessage = `Create ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  async updateFile(path: string, content: string): Promise<string> {
    const commitBuilder = new GitLabCommitBuilder(this);
    commitBuilder.updateFile(path, content);

    const commitMessage = `Update ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;
  async readFile(path: string, tagName?: string): Promise<string> {
    const fqRef: FullyQualifiedRef = !tagName
      ? this.fqBranch
      : createFullyQualifiedTag(this.fqBranch.owner, this.fqBranch.repositoryName, tagName);

    return await getFileContent(this.accessToken, fqRef, path);
  }

  async deleteFile(path: string): Promise<void> {
    const commitBuilder = new GitLabCommitBuilder(this);
    commitBuilder.deleteFile(path);

    const commitMessage = `Delete ${path}`;
    await commitBuilder.createCommit(commitMessage);
  }

  public async createJsonFile<T>(path: string, content: T): Promise<string> {
    const commitBuilder = new GitLabCommitBuilder(this);
    commitBuilder.createJsonFile(path, content);

    const commitMessage = `Create ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  public async readJsonFile<T>(path: string): Promise<T>;
  public async readJsonFile<T>(path: string, tagName: string): Promise<T>;
  public async readJsonFile<T>(path: string, tagName?: string): Promise<T> {
    if (tagName) {
      const stringContent = await this.readFile(path, tagName);
      return JSON.parse(stringContent);
    }

    const stringContent = await this.readFile(path);

    return JSON.parse(stringContent);
  }

  public async updateJsonFile<T>(path: string, content: T): Promise<string> {
    const commitBuilder = new GitLabCommitBuilder(this);
    commitBuilder.updateJsonFile(path, content);

    const commitMessage = `Update ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  async createTag(name: string): Promise<FullyQualifiedTag> {
    const newTagRef = await createTag(this.accessToken, this.fqBranch, name);

    return {
      refType: "tag",
      owner: this.fqBranch.owner,
      repositoryName: this.fqBranch.repositoryName,
      ref: newTagRef
    };
  }

  async getAllTags(): Promise<FullyQualifiedTag[]> {
    const newTagRefs = await allTags(
      this.accessToken,
      this.fqBranch.owner,
      this.fqBranch.repositoryName
    );

    return newTagRefs.map(ref => ({
      refType: "tag",
      owner: this.fqBranch.owner,
      repositoryName: this.fqBranch.repositoryName,
      ref
    }));
  }

  async deleteTag(name: string): Promise<void> {
    await deleteTag(this.accessToken, this.fqBranch.owner, this.fqBranch.repositoryName, name);
  }
}
