import { Snapshot } from "./snapshot";

export abstract class Repository {
  abstract createFile(path: string, content: string): Promise<string>;
  abstract updateFile(path: string, newContent: string): Promise<string>;
  abstract updateFile(path: string, newContent: string, oldContent: string): Promise<string>;
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

  public async updateJsonFile<T>(path: string, newContent: T): Promise<string>;
  public async updateJsonFile<T>(path: string, newContent: T, oldContent: T): Promise<string>;
  public async updateJsonFile<T>(path: string, newContent: T, oldContent?: T): Promise<string> {
    const newStringContent = JSON.stringify(newContent, null, 2);

    if (oldContent) {
      const oldStringContent = JSON.stringify(oldContent, null, 2);
      return await this.updateFile(path, newStringContent, oldStringContent);
    }

    return await this.updateFile(path, newStringContent);
  }
}
