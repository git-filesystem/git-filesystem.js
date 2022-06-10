import { Octokit } from "octokit";
import { GitUser, Provider } from "../client";
import {
  FullyQualifiedBranch,
  FullyQualifiedBranchRef,
  FullyQualifiedRef,
  isFullyQualifiedTagRef
} from "../ref";
import { defaultJsonConfig, JsonConfig, Repository } from "../repository";
import { Tag } from "../tag";
import { getFileContent } from "./gql/get-file-content";
import { getFileSha } from "./gql/get-file-sha";
import { createFile } from "./rest/create-file";
import { deleteFile } from "./rest/delete-file";
import { updateFile } from "./rest/update-file";

export class GitHubRepository extends Repository {
  readonly provider: Provider = "github";
  private readonly fqBranch: FullyQualifiedBranch;

  protected octokit: Octokit;

  public constructor(
    owner: string,
    repositoryName: string,
    public readonly accessToken: string,
    public readonly applicationName: string,
    public readonly authorDetails: GitUser | null = null,
    public readonly committerDetails: GitUser | null = null,
    jsonConfig: JsonConfig | null = null,
    public readonly defaultBranchRef: FullyQualifiedBranchRef = "refs/heads/main"
  ) {
    super(owner, repositoryName, jsonConfig ?? defaultJsonConfig);
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
    this.fqBranch = { refType: "branch", owner, repositoryName, ref: defaultBranchRef };
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
    const fqRef = this.getRef(tagName);
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

  createTag(name: string): Promise<Tag> {
    name;
    throw new Error("Method not implemented.");
  }

  getAllTags(): Promise<Tag[]> {
    throw new Error("Method not implemented.");
  }

  deleteTag(tag: Tag): Promise<void> {
    tag;
    throw new Error("Method not implemented.");
  }

  private getRef = (tagname?: string): FullyQualifiedRef => {
    if (!tagname) {
      return this.fqBranch;
    }

    if (isFullyQualifiedTagRef(tagname)) {
      return {
        refType: "tag",
        owner: this.owner,
        repositoryName: this.repositoryName,
        ref: tagname
      };
    }

    return {
      refType: "tag",
      owner: this.owner,
      repositoryName: this.repositoryName,
      ref: `refs/tags/${tagname}`
    };
  };
}
