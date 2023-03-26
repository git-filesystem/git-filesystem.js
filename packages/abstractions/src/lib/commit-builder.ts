export abstract class CommitBuilder {
  private readonly jsonConfig: JsonConfig;

  constructor(jsonConfig?: JsonConfig) {
    this.jsonConfig = jsonConfig ?? defaultJsonConfig;
  }

  abstract getAllFiles(directory: string): Promise<string[]>;
  abstract getAllFiles(directory: string, tagName: string): Promise<string[]>;

  abstract getAllDirectories(directory: string): Promise<string[]>;
  abstract getAllDirectories(directory: string, tagName: string): Promise<string[]>;

  abstract readFile(path: string): Promise<string>;
  abstract readFile(path: string, tagName: string): Promise<string>;

  abstract createFile(path: string, content: string): void;
  abstract updateFile(path: string, content: string): void;
  abstract deleteFile(path: string): void;

  abstract createCommit(commitMessage: string): Promise<string>;

  public createJsonFile<T>(path: string, content: T): void {
    const stringContent = this.stringify(content);
    this.createFile(path, stringContent);
  }

  public async readJsonFile<T>(path: string): Promise<T> {
    const stringContent = await this.readFile(path);
    return JSON.parse(stringContent);
  }

  public updateJsonFile<T>(path: string, content: T): void {
    const contentString = this.stringify(content);
    this.updateFile(path, contentString);
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
