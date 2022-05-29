import { createHash } from "crypto";
import { Octokit } from "octokit";
import { GitUser } from "../client";
import { Repository } from "../repository";
import { Snapshot } from "../snapshot";

export class GitHubRepository extends Repository {
  protected octokit: Octokit;

  public constructor(
    private readonly owner: string,
    private readonly repositoryName: string,
    accessToken: string,
    applicationName: string,
    private readonly authorDetails: GitUser | null = null,
    private readonly committerDetails: GitUser | null = null
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
      content: Buffer.from(content).toString("base64"),
      author: this.authorDetails ?? undefined,
      committer: this.committerDetails ?? undefined
    });

    return result.data.content!.sha!; // TODO: fix exclamation points
  }

  async updateFile(path: string, newContent: string): Promise<string>;
  async updateFile(path: string, newContent: string, oldContent: string): Promise<string>;
  async updateFile(path: string, newContent: string, oldContent?: string): Promise<string> {
    const sha = await this.getShaForFile(path, oldContent);

    const updateResult = await this.octokit.rest.repos.createOrUpdateFileContents({
      owner: this.owner,
      repo: this.repositoryName,
      path,
      sha,
      message: `Update ${path}`,
      content: Buffer.from(newContent).toString("base64"),
      author: this.authorDetails ?? undefined,
      committer: this.committerDetails ?? undefined
    });

    return updateResult.data.content!.sha!; // TODO: fix exclamation points
  }

  readFile(path: string): Promise<string>;
  readFile(path: string, snapshotName: string): Promise<string>;
  async readFile(path: any, snapshotName?: any): Promise<string> {
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

    return contentResult.data as any; // TODO: fix type?
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

  private async getShaForFile(path: string, oldContent?: string): Promise<string> {
    if (!!oldContent) {
      // TODO: implement
      console.log("Getting sha via file content is currently not supported");
      throw new Error("Getting sha via file content is currently not supported");
      return this.getShaForFileContent(oldContent!);
    }

    const contentResult = await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repositoryName,
      path
    });

    return (contentResult.data as any).sha!; // TODO: fix exclamation points
  }

  private getShaForFileContent(content: string): string {
    const contentWithOnlyLfLineEndings = content.replace(/\r\n/g, "\n");
    const contentWithCorrectLineEndings = this.ensureStringEndsWithNewline(
      contentWithOnlyLfLineEndings
    );

    const contentByteSize = new TextEncoder().encode(contentWithCorrectLineEndings).length;

    const header = `blob ${contentByteSize}\0`;

    const combined = header + contentWithCorrectLineEndings;

    const sha1 = createHash("sha1").update(combined).digest("hex");
    return sha1;
  }

  private ensureStringEndsWithNewline(content: string): string {
    if (content.endsWith("\n")) {
      return content;
    }

    return content + "\n";
  }
}
