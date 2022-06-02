import { Tag } from "..";
import { GitUser, Provider } from "../client";
import { defaultJsonConfig, JsonConfig, Repository } from "../repository";
import { allTags } from "./api-v4/all-tags";
import { createTag } from "./api-v4/create-tag";
import { deleteTag } from "./api-v4/delete-tag";
import { CommitAction, createCommit } from "./gql/create-commit";

export class GitLabRepository extends Repository {
  public readonly fullPath: string;

  provider: Provider = "gitlab";

  public constructor(
    owner: string,
    repositoryName: string,
    public readonly accessToken: string,
    public readonly applicationName: string,
    public readonly authorDetails: GitUser | null = null,
    public readonly committerDetails: GitUser | null = null,
    jsonConfig: JsonConfig | null = null
  ) {
    super(owner, repositoryName, jsonConfig ?? defaultJsonConfig);
    this.fullPath = `${owner}/${repositoryName}`;
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

    const result = await createCommit(
      this.accessToken,
      this.fullPath,
      this.applicationName,
      "main",
      commitMessage,
      createActions
    );

    if (result.errors.length > 0 || !result.sha) {
      throw new Error(result.errors.join("\n"));
    }

    return result.sha;
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

    const result = await createCommit(
      this.accessToken,
      this.fullPath,
      this.applicationName,
      "main",
      commitMessage,
      createActions
    );

    if (result.errors.length > 0 || !result.sha) {
      throw new Error(result.errors.join("\n"));
    }

    return result.sha;
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;
  readFile(path: unknown, tagName?: unknown): Promise<string> {
    path;
    tagName;
    throw new Error("Method not implemented.");
  }

  async deleteFile(path: string): Promise<void> {
    const commitMessage = `Delete ${path}`;

    const createAction: CommitAction = {
      action: "DELETE",
      filePath: path
    };

    const createActions = [createAction];

    const result = await createCommit(
      this.accessToken,
      this.fullPath,
      this.applicationName,
      "main",
      commitMessage,
      createActions
    );

    if (result.errors.length > 0 || !result.sha) {
      throw new Error(result.errors.join("\n"));
    }
  }

  async createTag(name: string): Promise<Tag> {
    const newTag = await createTag(this.accessToken, this.owner, this.repositoryName, name, "main");
    return { name: newTag.name, oid: newTag.target };
  }

  async getAllTags(): Promise<Tag[]> {
    const tags = await allTags(this.accessToken, this.owner, this.repositoryName);
    return tags.map(t => ({ name: t.name, oid: t.target }));
  }

  async deleteTag(tag: Tag): Promise<void> {
    await deleteTag(this.accessToken, this.owner, this.repositoryName, tag.name);
  }
}
