import { Octokit } from "octokit";
import { GitUser, Provider } from "../client";
import { defaultJsonConfig, JsonConfig, Repository } from "../repository";
import { Snapshot } from "../snapshot";

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
    const result = await this.octokit.rest.repos.createOrUpdateFileContents({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      message: `Create ${path}`,
      content: Buffer.from(content).toString("base64"),
      author: this.authorDetails ?? undefined,
      committer: this.committerDetails ?? undefined
    });

    if (hasSha(result.data.content)) {
      return result.data.content.sha;
    }

    throw new Error(`Could not create file, expected string but got ${typeof result.data.content}`);
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
  readFile(path: string, snapshotName: string): Promise<string>;
  async readFile(path: string, snapshotName?: string): Promise<string> {
    const ref = snapshotName ? snapshotName : "main";

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

  createSnapshot(name: string): Promise<Snapshot> {
    name;
    throw new Error("Method not implemented.");
  }

  getAllSnapshots(): Promise<Snapshot[]> {
    throw new Error("Method not implemented.");
  }

  deleteSnapshot(snapshot: Snapshot): Promise<void> {
    snapshot;
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
