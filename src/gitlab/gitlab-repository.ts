import { Snapshot } from "..";
import { GitUser, Provider } from "../client";
import { defaultJsonConfig, JsonConfig, Repository } from "../repository";
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
  readFile(path: string, snapshotName: string): Promise<string>;
  readFile(path: unknown, snapshotName?: unknown): Promise<string> {
    path;
    snapshotName;
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
}
