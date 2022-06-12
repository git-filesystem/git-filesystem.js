import { GitUser, Provider } from "../client";
import {
  createFullyQualifiedTag,
  FullyQualifiedBranch,
  FullyQualifiedRef,
  FullyQualifiedTag
} from "../ref";
import { JsonConfig, Repository } from "../repository";
import { CommitAction, createCommit } from "./gql/create-commit";
import { allTags } from "./rest/all-tags";
import { createTag } from "./rest/create-tag";
import { deleteTag } from "./rest/delete-tag";
import { getFileContent } from "./rest/get-file-content";

export class GitLabRepository extends Repository {
  provider: Provider = "gitlab";

  public constructor(
    public readonly accessToken: string,
    public readonly fqBranch: FullyQualifiedBranch,
    public readonly applicationName: string,
    public readonly authorDetails: GitUser | null = null,
    public readonly committerDetails: GitUser | null = null,
    jsonConfig: JsonConfig | null = null
  ) {
    super(jsonConfig);
  }

  async createFile(path: string, content: string): Promise<string> {
    const commitMessage = `Create ${path}`;

    const createAction: CommitAction = {
      action: "CREATE",
      content,
      filePath: path,
      encoding: "TEXT"
    };

    const createActions = [createAction];

    const sha = await createCommit(
      this.accessToken,
      this.fqBranch,
      this.applicationName,
      commitMessage,
      createActions
    );

    return sha;
  }

  async updateFile(path: string, content: string): Promise<string> {
    const commitMessage = `Update ${path}`;

    const createAction: CommitAction = {
      action: "UPDATE",
      content,
      filePath: path,
      encoding: "TEXT"
    };

    const createActions = [createAction];

    const sha = await createCommit(
      this.accessToken,
      this.fqBranch,
      this.applicationName,
      commitMessage,
      createActions
    );

    return sha;
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
    const commitMessage = `Delete ${path}`;

    const createAction: CommitAction = {
      action: "DELETE",
      filePath: path
    };

    const createActions = [createAction];

    await createCommit(
      this.accessToken,
      this.fqBranch,
      this.applicationName,
      commitMessage,
      createActions
    );
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
