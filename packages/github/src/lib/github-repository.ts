import {
  createFullyQualifiedTag,
  fqTagRefPrefix,
  FullyQualifiedBranch,
  FullyQualifiedRef,
  FullyQualifiedTag,
  FullyQualifiedTagRef,
  GitUser,
  isFullyQualifiedTagRef,
  JsonConfig,
  Provider,
  Repository
} from "@git-filesystem/abstractions";
import { GitHubCommitBuilder } from "./github-commit-builder";
import { createTag } from "./gql/create-tag";
import { deleteTag } from "./gql/delete-tag";
import { getAllTags } from "./gql/get-all-tags";
import { getFileContent } from "./gql/get-file-content";
import { getRefIdForTag } from "./gql/get-ref-id-for-tag";
import { getDirsInDir } from "./rest/get-dirs-in-dir";
import { getFilesInDir } from "./rest/get-files-in-dir";

export class GitHubRepository implements Repository {
  readonly provider: Provider = "github";

  public constructor(
    public readonly accessToken: string,
    public readonly fqBranch: FullyQualifiedBranch,
    public readonly applicationName: string,
    public readonly authorDetails?: GitUser,
    public readonly committerDetails?: GitUser,
    public readonly jsonConfig?: JsonConfig
  ) {}

  public async getAllTags(): Promise<FullyQualifiedTag[]> {
    const fqTagRefs: FullyQualifiedTagRef[] = await getAllTags(
      this.accessToken,
      this.fqBranch.owner,
      this.fqBranch.repositoryName
    );

    return fqTagRefs.map<FullyQualifiedTag>(fqTagRef => ({
      refType: "tag",
      owner: this.fqBranch.owner,
      repositoryName: this.fqBranch.repositoryName,
      ref: fqTagRef
    }));
  }

  public getAllFiles(directory: string): Promise<string[]>;
  public getAllFiles(directory: string, tagName: string): Promise<string[]>;
  public async getAllFiles(directory: string, tagName?: string): Promise<string[]> {
    const fqRef: FullyQualifiedRef = !tagName
      ? this.fqBranch
      : createFullyQualifiedTag(this.fqBranch.owner, this.fqBranch.repositoryName, tagName);

    const files = await getFilesInDir(this.accessToken, directory, fqRef);
    return files.map(file => file.name);
  }

  public getAllDirectories(directory: string): Promise<string[]>;
  public getAllDirectories(directory: string, tagName: string): Promise<string[]>;
  public async getAllDirectories(directory: string, tagName?: string): Promise<string[]> {
    const fqRef: FullyQualifiedRef = !tagName
      ? this.fqBranch
      : createFullyQualifiedTag(this.fqBranch.owner, this.fqBranch.repositoryName, tagName);

    const directories = await getDirsInDir(this.accessToken, directory, fqRef);
    return directories.map(dir => dir.name);
  }

  public readFile(path: string): Promise<string>;
  public readFile(path: string, tagName: string): Promise<string>;
  public async readFile(path: string, tagName?: string): Promise<string> {
    const fqRef: FullyQualifiedRef = !tagName
      ? this.fqBranch
      : createFullyQualifiedTag(this.fqBranch.owner, this.fqBranch.repositoryName, tagName);

    return await getFileContent(this.accessToken, fqRef, path);
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

  public createCommitBuilder(): GitHubCommitBuilder {
    return new GitHubCommitBuilder(this);
  }

  public async createFile(path: string, content: string): Promise<string> {
    const commitBuilder = this.createCommitBuilder();
    commitBuilder.createFile(path, content);

    const commitMessage = `Create ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  public async updateFile(path: string, content: string): Promise<string> {
    const commitBuilder = this.createCommitBuilder();
    commitBuilder.updateFile(path, content);

    const commitMessage = `Update ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  public async deleteFile(path: string): Promise<void> {
    const commitBuilder = this.createCommitBuilder();
    commitBuilder.deleteFile(path);

    const commitMessage = `Delete ${path}`;
    await commitBuilder.createCommit(commitMessage);
  }

  public async createJsonFile<T>(path: string, content: T): Promise<string> {
    const commitBuilder = this.createCommitBuilder();
    commitBuilder.createJsonFile(path, content);

    const commitMessage = `Create ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  public async updateJsonFile<T>(path: string, content: T): Promise<string> {
    const commitBuilder = this.createCommitBuilder();
    commitBuilder.updateJsonFile(path, content);

    const commitMessage = `Update ${path}`;
    return await commitBuilder.createCommit(commitMessage);
  }

  public async createTag(name: string): Promise<FullyQualifiedTag> {
    const fqTagRef: FullyQualifiedTagRef = isFullyQualifiedTagRef(name)
      ? name
      : `${fqTagRefPrefix}${name}`;

    await createTag(this.accessToken, this.fqBranch, fqTagRef);

    return {
      refType: "tag",
      owner: this.fqBranch.owner,
      repositoryName: this.fqBranch.repositoryName,
      ref: fqTagRef
    };
  }

  public async deleteTag(name: string): Promise<void> {
    const fqTagRef: FullyQualifiedTagRef = isFullyQualifiedTagRef(name)
      ? name
      : `${fqTagRefPrefix}${name}`;

    const fqTag: FullyQualifiedTag = {
      refType: "tag",
      owner: this.fqBranch.owner,
      repositoryName: this.fqBranch.repositoryName,
      ref: fqTagRef
    };

    const tagId = await getRefIdForTag(this.accessToken, fqTag);

    await deleteTag(this.accessToken, tagId);
  }
}
