import { Repository } from "./repository";

export type RepositoryExistence = "DoesNotExist" | "Exists" | "IsArchived";

export interface Client {
  getAllRepositories(): Promise<string[]>;
  getRepository(name: string): Repository;
  doesRepositoryExist(name: string): Promise<RepositoryExistence>;
  createRepository(name: string, isPrivate: boolean, description: string): Promise<Repository>;
  searchRepositoriesByFile(filePath: string, contentSearchString: string): Promise<string[]>;
}
