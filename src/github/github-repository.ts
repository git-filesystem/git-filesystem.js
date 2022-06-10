import { Octokit } from "octokit";
import { GitUser, Provider } from "../client";
import { defaultJsonConfig, JsonConfig, Repository } from "../repository";
import { Tag } from "../tag";
import { createFile } from "./rest/create-file";

export class GitHubRepository extends Repository {
  provider: Provider = "github";

  protected octokit: Octokit;

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
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
  }

  async createFile(path: string, content: string): Promise<string> {
    return await createFile(
      this.accessToken,
      this.owner,
      this.repositoryName,
      path,
      content,
      this.committerDetails,
      this.authorDetails
    );
  }

  async updateFile(path: string, content: string): Promise<string> {
    const sha = await this.getShaForFile(path);

    const updateResult = await this.octokit.rest.repos.createOrUpdateFileContents({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      sha,
      message: `Update ${path}`,
      content: Buffer.from(content).toString("base64"),
      author: this.authorDetails ?? undefined,
      committer: this.committerDetails ?? undefined
    });

    if (hasSha(updateResult.data.content)) {
      return updateResult.data.content.sha;
    }

    throw new Error(
      `Could not update file, expected string but got ${typeof updateResult.data.content}`
    );
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;
  async readFile(path: string, tagName?: string): Promise<string> {
    const ref = tagName ? tagName : "main";

    const contentResult = await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      ref,
      mediaType: {
        format: "raw"
      }
    });

    if (typeof contentResult.data === "string") {
      return contentResult.data;
    }

    throw new Error(`Could not read file, expected string but got ${typeof contentResult.data}`);
  }

  async deleteFile(path: string): Promise<void> {
    const sha = await this.getShaForFile(path);

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

  private async getShaForFile(path: string): Promise<string> {
    const contentResult = await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repositoryName,
      path
    });

    if (hasSha(contentResult.data)) {
      return contentResult.data.sha;
    }

    throw new Error(
      `Could not get sha for file, expected string but got ${typeof contentResult.data}`
    );
  }
}

const hasSha = (value: unknown): value is HasSha => {
  return typeof value === "object" && !!value && typeof (value as HasSha).sha === "string";
};

interface HasSha {
  sha: string;
}
