import { GitUser, Provider } from "../client";
import {
  createFullyQualifiedTag,
  fqTagRefPrefix,
  FullyQualifiedBranch,
  FullyQualifiedRef,
  FullyQualifiedTag,
  FullyQualifiedTagRef,
  isFullyQualifiedTagRef
} from "../ref";
import { JsonConfig, Repository } from "../repository";
import { createTag } from "./gql/create-tag";
import { deleteTag } from "./gql/delete-tag";
import { getAllTags } from "./gql/get-all-tags";
import { getFileContent } from "./gql/get-file-content";
import { getFileSha } from "./gql/get-file-sha";
import { getRefIdForTag } from "./gql/get-ref-id-for-tag";
import { createFile } from "./rest/create-file";
import { deleteFile } from "./rest/delete-file";
import { updateFile } from "./rest/update-file";

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
    return await createFile(
      this.accessToken,
      this.fqBranch,
      path,
      content,
      this.committerDetails,
      this.authorDetails
    );
  }

  async updateFile(path: string, content: string): Promise<string> {
    const sha = await getFileSha(this.accessToken, this.fqBranch, path);

    return await updateFile(
      this.accessToken,
      this.fqBranch,
      path,
      content,
      sha,
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
    const sha = await getFileSha(this.accessToken, this.fqBranch, path);

    await deleteFile(
      this.accessToken,
      this.fqBranch,
      path,
      sha,
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
