import axios from "axios";
import { createHash } from "crypto";
import { Octokit } from "octokit";
import { Repository } from "../repository";
import { Snapshot } from "../snapshot";

export class GitHubRepository extends Repository {
  protected octokit: Octokit;

  public constructor(
    private readonly owner: string,
    private readonly repositoryName: string,
    private readonly accessToken: string,
    private readonly applicationName: string
  ) {
    super();
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
  }

  async createFile(path: string, content: string): Promise<string> {
    const result = await this.octokit.rest.repos.createOrUpdateFileContents({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      message: `Create ${path}`,
      content: Buffer.from(content).toString("base64")
    });

    return result.data.content!.sha!; // TODO: fix exclamation points
  }

  async updateFile(path: string, content: string): Promise<string> {
    const contentResult = await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repositoryName,
      path
    });

    const updateResult = await this.octokit.rest.repos.createOrUpdateFileContents({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      sha: (contentResult.data as any).sha,
      message: `Update ${path}`,
      content: Buffer.from(content).toString("base64")
    });

    return updateResult.data.content!.sha!; // TODO: fix exclamation points
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, snapshotName: string): Promise<string>;
  async readFile(path: any, snapshotName?: any): Promise<string> {
    const ref = snapshotName ? snapshotName : "main";

    const url = `https://raw.githubusercontent.com/${this.owner}/${this.repositoryName}/${ref}/${path}`;

    const response = await axios.get(url, {
      transformResponse: res => res,
      headers: {
        Authorization: `token ${this.accessToken}`,
        Accept: "application/vnd.github.v3.raw",
        "User-Agent": this.applicationName
      }
    });

    return response.data;
  }

  deleteFile(path: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  createSnapshot(name: string): Promise<Snapshot> {
    throw new Error("Method not implemented.");
  }

  getAllSnapshots(): Promise<Snapshot[]> {
    throw new Error("Method not implemented.");
  }

  deleteSnapshot(snapshot: Snapshot): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
