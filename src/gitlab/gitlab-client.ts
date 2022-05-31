import { Repository } from "..";
import { Client, GitUser, Provider, RepositoryExistence } from "../client";
import { JsonConfig } from "../repository";
import { GitLabRepository } from "./gitlab-repository";
import { getAllRepositories } from "./gql/get-all-repositories";
import { isRepositoryArchived } from "./gql/is-repository-archived";

export class GitLabClient extends Client {
  readonly provider: Provider = "gitlab";

  constructor(
    private readonly owner: string,
    private readonly accessToken: string,
    private readonly applicationName: string,
    private readonly authorDetails: GitUser | null = null,
    private readonly committerDetails: GitUser | null = null,
    private readonly jsonConfig: JsonConfig | null = null
  ) {
    super();
  }

  getAllRepositories(): Promise<string[]> {
    return getAllRepositories();
  }

  getRepository(name: string): Repository {
    return new GitLabRepository(
      this.owner,
      name,
      this.accessToken,
      this.applicationName,
      this.authorDetails,
      this.committerDetails,
      this.jsonConfig
    );
  }

  async doesRepositoryExist(name: string): Promise<RepositoryExistence> {
    try {
      const isArchived = await isRepositoryArchived(this.owner, name);
      return isArchived ? "IsArchived" : "Exists";
    } catch {
      return "DoesNotExist";
    }
  }

  createRepository(name: string, isPrivate: boolean, description: string): Promise<Repository> {
    name;
    isPrivate;
    description;
    throw new Error("Method not implemented.");
  }

  searchRepositoriesByFile(filePath: string, contentSearchString: string): Promise<string[]> {
    filePath;
    contentSearchString;

    // TODO: This needs to actually search by filePath and contentSearchString
    // TODO: Right now it always returns all repositories

    return this.getAllRepositories();
  }

  deleteRepository(name: string): Promise<void> {
    name;
    throw new Error("Method not implemented.");
  }
}
