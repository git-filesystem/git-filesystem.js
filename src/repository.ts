import { Provider } from "./client";
import { Snapshot } from "./snapshot";

// TODO: Add moving files

export abstract class Repository {
  abstract provider: Provider;

  protected constructor(
    public readonly owner: string,
    public readonly repositoryName: string,
    public readonly jsonConfig: JsonConfig = defaultJsonConfig
  ) {}

  abstract createFile(path: string, content: string): Promise<string>;
  abstract updateFile(path: string, content: string): Promise<string>;
  abstract readFile(path: string): Promise<string>;
  abstract readFile(path: string, snapshotName: string): Promise<string>;
  abstract deleteFile(path: string): Promise<void>;

  abstract createSnapshot(name: string): Promise<Snapshot>;
  abstract getAllSnapshots(): Promise<Snapshot[]>;
  abstract deleteSnapshot(snapshot: Snapshot): Promise<void>;

  public async createJsonFile<T>(path: string, content: T): Promise<string> {
    const stringContent = this.stringify(content);
    return await this.createFile(path, stringContent);
  }

  public async readJsonFile<T>(path: string): Promise<T> {
    const stringContent = await this.readFile(path);
    return JSON.parse(stringContent);
  }

  public async updateJsonFile<T>(path: string, content: T): Promise<string> {
    const contentString = this.stringify(content);
    return await this.updateFile(path, contentString);
  }

  private stringify = (value: unknown): string => {
    const indentChar = this.jsonConfig.prettyFormat
      ? this.jsonConfig.indentChar.repeat(this.jsonConfig.indentSize)
      : undefined;

    return JSON.stringify(value, null, indentChar);
  };
}

type FormatJsonConfig = {
  prettyFormat: true;
  indentChar: " " | "\t";
  indentSize: number;
};

type NoFormatJsonConfig = {
  prettyFormat: false;
};

export type JsonConfig = FormatJsonConfig | NoFormatJsonConfig;

export const defaultJsonConfig: JsonConfig = {
  prettyFormat: true,
  indentChar: " ",
  indentSize: 2
};
