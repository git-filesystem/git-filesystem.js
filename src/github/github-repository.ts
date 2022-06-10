import { Octokit } from "octokit";
import { GitUser, Provider } from "../client";
import { defaultJsonConfig, JsonConfig, Repository } from "../repository";
import { Tag } from "../tag";
import { getFileContent } from "./gql/get-file-content";
import { getFileSha } from "./gql/get-file-sha";
import { createFile } from "./rest/create-file";
import { updateFile } from "./rest/update-file";

export class GitHubRepository extends Repository {
  readonly provider: Provider = "github";

  protected octokit: Octokit;

  public constructor(
    owner: string,
    repositoryName: string,
    public readonly accessToken: string,
    public readonly applicationName: string,
    public readonly authorDetails: GitUser | null = null,
    public readonly committerDetails: GitUser | null = null,
    jsonConfig: JsonConfig | null = null,
    public readonly defaultBranch: string = "refs/heads/main"
  ) {
    super(owner, repositoryName, jsonConfig ?? defaultJsonConfig);
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
  }

  async createFile(path: string, content: string): Promise<string> {
    return await createFile(
      this.accessToken,
      this.owner,
      this.repositoryName,
      path,
      content,
      this.defaultBranch,
      this.committerDetails,
      this.authorDetails
    );
  }

  async updateFile(path: string, content: string): Promise<string> {
    const sha = await getFileSha(
      this.accessToken,
      this.owner,
      this.repositoryName,
      this.defaultBranch,
      path
    );

    return await updateFile(
      this.accessToken,
      this.owner,
      this.repositoryName,
      path,
      content,
      this.defaultBranch,
      sha,
      this.committerDetails,
      this.authorDetails
    );
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;
  async readFile(path: string, tagName?: string): Promise<string> {
    const ref = this.getRef(tagName);
    return await getFileContent(this.accessToken, this.owner, this.repositoryName, ref, path);
  }

  async deleteFile(path: string): Promise<void> {
    const sha = await getFileSha(
      this.accessToken,
      this.owner,
      this.repositoryName,
      this.defaultBranch,
      path
    );

    await this.octokit.rest.repos.deleteFile({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      sha,
      message: `Delete ${path}`,
      author: this.authorDetails ?? undefined,
      committer: this.committerDetails ?? undefined
    });
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

  private getRef = (tagname?: string): string => {
    if (!tagname) {
      return this.defaultBranch;
    }

    if (tagname.startsWith("refs/tags")) {
      return tagname;
    }

    return `refs/tags/${tagname}`;
  };
}
