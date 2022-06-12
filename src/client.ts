import { ReadonlyRepository, Repository } from "./repository";

export type RepositoryExistence = "DoesNotExist" | "Exists" | "IsArchived";

export type Provider = "github" | "gitlab";

export abstract class Client {
  abstract provider: Provider;

  abstract getAllRepositories(): Promise<string[]>;
  abstract getAllRepositories(owner: string): Promise<string[]>;

  // TODO: support branch names
  abstract getRepository(name: string): Repository;
  abstract getRepository(name: string, owner: string): Repository;

  // TODO: support branch names
  getReadonlyRepository(name: string): ReadonlyRepository;
  getReadonlyRepository(name: string, owner: string): ReadonlyRepository;
  getReadonlyRepository(name: string, owner?: string): ReadonlyRepository {
    if (owner) {
      return this.getRepository(name, owner);
    }

    return this.getRepository(name);
  }

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
