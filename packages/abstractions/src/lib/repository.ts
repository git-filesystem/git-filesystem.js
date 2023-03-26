import { Provider } from "./client";
import { CommitBuilder } from "./commit-builder";
import { FullyQualifiedBranch, FullyQualifiedTag } from "./ref";

// TODO: Add moving files

export interface ReadonlyRepository {
  readonly provider: Provider;

  getAllTags(): Promise<FullyQualifiedTag[]>;

  getAllFiles(directory: string): Promise<string[]>;
  getAllFiles(directory: string, tagName: string): Promise<string[]>;

  getAllDirectories(directory: string): Promise<string[]>;
  getAllDirectories(directory: string, tagName: string): Promise<string[]>;

  readFile(path: string): Promise<string>;
  readFile(path: string, tagName: string): Promise<string>;

  readJsonFile<T>(path: string): Promise<T>;
  readJsonFile<T>(path: string, tagName: string): Promise<T>;
}

export interface Repository extends ReadonlyRepository {
  readonly fqBranch: FullyQualifiedBranch;

  createCommitBuilder(): CommitBuilder;

  createFile(path: string, content: string): Promise<string>;
  updateFile(path: string, content: string): Promise<string>;
  deleteFile(path: string): Promise<void>;

  createJsonFile<T>(path: string, content: T): Promise<string>;
  updateJsonFile<T>(path: string, content: T): Promise<string>;

  createTag(name: string): Promise<FullyQualifiedTag>;
  deleteTag(name: string): Promise<void>;
}
