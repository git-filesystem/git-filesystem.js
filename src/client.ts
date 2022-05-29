import { Repository } from "./repository";

export type RepositoryExistence = "DoesNotExist" | "Exists" | "IsArchived";

export type Provider = "github";

export abstract class Client {
  abstract provider: Provider;

  abstract getAllRepositories(): Promise<string[]>;
  abstract getRepository(name: string): Repository;
  abstract doesRepositoryExist(name: string): Promise<RepositoryExistence>;
  abstract createRepository(
    name: string,
    isPrivate: boolean,
    description: string
  ): Promise<Repository>;
  abstract searchRepositoriesByFile(
    filePath: string,
    contentSearchString: string
  ): Promise<string[]>;
  abstract deleteRepository(name: string): Promise<void>;
}

export interface GitUser {
  name: string;
  email: string;
}
