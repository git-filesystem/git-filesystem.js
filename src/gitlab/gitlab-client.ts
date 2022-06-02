import { Repository } from "..";
import { Client, GitUser, Provider, RepositoryExistence } from "../client";
import { JsonConfig } from "../repository";
import { GitLabRepository } from "./gitlab-repository";
import { getAllRepositories } from "./gql/get-all-repositories";
import { isRepositoryArchived } from "./gql/is-repository-archived";
import { createProject } from "./rest/create-project";
import { deleteProject } from "./rest/delete-project";

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
    return getAllRepositories(this.accessToken);
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
      const isArchived = await isRepositoryArchived(this.accessToken, this.owner, name);
      return isArchived ? "IsArchived" : "Exists";
    } catch {
      return "DoesNotExist";
    }
  }

  async createRepository(
    name: string,
    isPrivate: boolean,
    description: string
  ): Promise<Repository> {
    await createProject(this.accessToken, name, isPrivate, description);
    return this.getRepository(name);
  }

  searchRepositoriesByFile(filePath: string, contentSearchString: string): Promise<string[]> {
    filePath;
    contentSearchString;

    // TODO: This needs to actually search by filePath and contentSearchString
    // TODO: Right now it always returns all repositories

    return this.getAllRepositories();
  }

  async deleteRepository(name: string): Promise<void> {
    await deleteProject(this.accessToken, this.owner, name);
  }
}
