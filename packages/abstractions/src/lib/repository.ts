import { Provider } from "./client";
import { FullyQualifiedBranch, FullyQualifiedTag } from "./ref";

// TODO: Add moving files

export interface ReadonlyRepository {
  provider: Provider;

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;

  getAllTags(): Promise<FullyQualifiedTag[]>;

  readJsonFile<T>(path: string): Promise<T>;
  readJsonFile<T>(path: string, tagName: string): Promise<T>;
}

export interface Repository extends ReadonlyRepository {
  readonly provider: Provider;
  readonly fqBranch: FullyQualifiedBranch;

  createFile(path: string, content: string): Promise<string>;
  updateFile(path: string, content: string): Promise<string>;
  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;
  deleteFile(path: string): Promise<void>;

  createJsonFile<T>(path: string, content: T): Promise<string>;
  updateJsonFile<T>(path: string, content: T): Promise<string>;

  createTag(name: string): Promise<FullyQualifiedTag>;
  getAllTags(): Promise<FullyQualifiedTag[]>;
  deleteTag(name: string): Promise<void>;
}
