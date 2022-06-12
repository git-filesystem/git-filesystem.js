import { Provider } from "./client";
import { FullyQualifiedBranch, FullyQualifiedTag } from "./ref";

// TODO: Add moving files

export interface ReadonlyRepository {
  provider: Provider;

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;

  getAllTags(): Promise<FullyQualifiedTag[]>;

  readJsonFile<T>(path: string): Promise<T>;
}

export abstract class Repository implements ReadonlyRepository {
  public abstract readonly provider: Provider;
  public abstract readonly fqBranch: FullyQualifiedBranch;

  private readonly jsonConfig: JsonConfig;

  constructor(jsonConfig: JsonConfig | null) {
    this.jsonConfig = jsonConfig ?? defaultJsonConfig;
  }

  abstract createFile(path: string, content: string): Promise<string>;
  abstract updateFile(path: string, content: string): Promise<string>;
  abstract readFile(path: string): Promise<string>;
  abstract readFile(path: string, tagName: string): Promise<string>;
  abstract deleteFile(path: string): Promise<void>;

  abstract createTag(name: string): Promise<FullyQualifiedTag>;
  abstract getAllTags(): Promise<FullyQualifiedTag[]>;
  abstract deleteTag(name: string): Promise<void>;

  public async createJsonFile<T>(path: string, content: T): Promise<string> {
    const stringContent = this.stringify(content);
    return await this.createFile(path, stringContent);
  }

  public async readJsonFile<T>(path: string): Promise<T>;
  public async readJsonFile<T>(path: string, tagName: string): Promise<T>;
  public async readJsonFile<T>(path: string, tagName?: string): Promise<T> {
    if (tagName) {
      const stringContent = await this.readFile(path, tagName);
      return JSON.parse(stringContent);
    }

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
