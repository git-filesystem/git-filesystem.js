import { Snapshot } from "./snapshot";

export abstract class Repository {
  protected constructor(private readonly jsonConfig: JsonConfig = defaultJsonConfig) {}

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
    const stringContent = this.stringify(content);
    return await this.createFile(path, stringContent);
  }

  public async readJsonFile<T>(path: string): Promise<T> {
    const stringContent = await this.readFile(path);
    return JSON.parse(stringContent);
  }

  public async updateJsonFile<T>(path: string, newContent: T): Promise<string>;
  public async updateJsonFile<T>(path: string, newContent: T, oldContent: T): Promise<string>;
  public async updateJsonFile<T>(path: string, newContent: T, oldContent?: T): Promise<string> {
    const newStringContent = this.stringify(newContent);

    if (oldContent) {
      const oldStringContent = this.stringify(oldContent);
      return await this.updateFile(path, newStringContent, oldStringContent);
    }

    return await this.updateFile(path, newStringContent);
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
