import { Octokit } from "octokit";
import { Snapshot } from "./snapshot";

export abstract class Repository {
  protected abstract octokit: Octokit;

  abstract createFile(path: string, content: string): Promise<string>;
  abstract updateFile(path: string, content: string): Promise<string>;
  abstract readFile(path: string): Promise<string>;
  abstract readFile(path: string, snapshotName: string): Promise<string>;
  abstract deleteFile(path: string): Promise<void>;

  abstract createSnapshot(name: string): Promise<Snapshot>;
  abstract getAllSnapshots(): Promise<Snapshot[]>;
  abstract deleteSnapshot(snapshot: Snapshot): Promise<void>;

  public async createJsonFile<T>(path: string, content: T): Promise<string> {
    const stringContent = JSON.stringify(content, null, 2);
    return await this.createFile(path, stringContent);
  }

  public async readJsonFile<T>(path: string): Promise<T> {
    const stringContent = await this.readFile(path);
    return JSON.parse(stringContent);
  }

  public async updateJsonFile<T>(path: string, content: T): Promise<string> {
    const stringContent = JSON.stringify(content, null, 2);
    return await this.updateFile(path, stringContent);
  }
}
