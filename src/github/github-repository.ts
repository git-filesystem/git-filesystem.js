import { Octokit } from "octokit";
import { Repository } from "../repository";
import { Snapshot } from "../snapshot";

export class GitHubRepository extends Repository {
  protected octokit: Octokit;

  public constructor(
    private readonly owner: string,
    private readonly repositoryName: string,
    accessToken: string,
    applicationName: string
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

  updateFile(path: string, content: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, snapshotName: string): Promise<string>;
  async readFile(path: any, snapshotName?: any): Promise<string> {
    const ref = snapshotName ? snapshotName : undefined;

    const result = await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      ref
    });

    const base64Content = (result.data as any).content!;
    return Buffer.from(base64Content, "base64").toString();
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
