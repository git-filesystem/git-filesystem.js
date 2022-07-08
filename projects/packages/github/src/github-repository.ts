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
} from "@gitbuckets/abstractions";
import { createTag } from "./gql/create-tag";
import { deleteTag } from "./gql/delete-tag";
import { getAllTags } from "./gql/get-all-tags";
import { getFileContent } from "./gql/get-file-content";
import { getRefIdForTag } from "./gql/get-ref-id-for-tag";
import { createCommit } from "./rest/create-commit";
import { CreateCommitAction, DeleteCommitAction, UpdateCommitAction } from "./rest/create-tree";

export class GitHubRepository extends Repository {
  readonly provider: Provider = "github";

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
    const createAction: CreateCommitAction = {
      action: "CREATE",
      filePath: path,
      content
    };

    const commitActions = [createAction];
    const commitMessage = `Create ${path}`;

    return await createCommit(
      this.accessToken,
      this.fqBranch,
      commitActions,
      commitMessage,
      this.committerDetails,
      this.authorDetails
    );
  }

  async updateFile(path: string, content: string): Promise<string> {
    const createAction: UpdateCommitAction = {
      action: "UPDATE",
      filePath: path,
      content
    };

    const commitActions = [createAction];
    const commitMessage = `Update ${path}`;

    return await createCommit(
      this.accessToken,
      this.fqBranch,
      commitActions,
      commitMessage,
      this.committerDetails,
      this.authorDetails
    );
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
    const createAction: DeleteCommitAction = {
      action: "DELETE",
      filePath: path
    };

    const commitActions = [createAction];
    const commitMessage = `Delete ${path}`;

    await createCommit(
      this.accessToken,
      this.fqBranch,
      commitActions,
      commitMessage,
      this.committerDetails,
      this.authorDetails
    );
  }

  async createTag(name: string): Promise<FullyQualifiedTag> {
    const fqTagRef: FullyQualifiedTagRef = isFullyQualifiedTagRef(name)
      ? name
      : `${fqTagRefPrefix}${name}`;

    await createTag(this.accessToken, this.fqBranch, fqTagRef);

    return {
      refType: "tag",
      owner: this.fqBranch.owner,
      repositoryName: this.fqBranch.owner,
      ref: fqTagRef
    };
  }

  async getAllTags(): Promise<FullyQualifiedTag[]> {
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

  async deleteTag(name: string): Promise<void> {
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
