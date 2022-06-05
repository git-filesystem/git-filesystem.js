import { Octokit } from "octokit";
import { Client, GitUser, Provider, RepositoryExistence } from "../client";
import { JsonConfig, Repository } from "../repository";
import { GitHubRepository } from "./github-repository";
import { createRepository } from "./gql/create-repository";
import { getAllRepositories } from "./gql/get-all-repositories";
import { getAllRepositoriesForOwner } from "./gql/get-all-repositories-for-owner";
import { isRepositoryArchived } from "./gql/is-repository-archived";
import { deleteRepo } from "./rest/delete-repo";

export class GitHubClient extends Client {
  readonly provider: Provider = "github";

  private octokit: Octokit;

  constructor(
    private readonly owner: string,
    private readonly accessToken: string,
    private readonly applicationName: string,
    private readonly authorDetails: GitUser | null = null,
    private readonly committerDetails: GitUser | null = null,
    private readonly jsonConfig: JsonConfig | null = null
  ) {
    super();
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
  }

  async getAllRepositories(): Promise<string[]>;
  async getAllRepositories(owner: string): Promise<string[]>;
  async getAllRepositories(owner?: string): Promise<string[]> {
    if (owner) {
      return await getAllRepositoriesForOwner(this.accessToken, owner);
    }

    return await getAllRepositories(this.accessToken);
  }

  getRepository(name: string): Repository;
  getRepository(name: string, owner: string): Repository;
  getRepository(name: string, owner?: string): Repository {
    return new GitHubRepository(
      owner ?? this.owner,
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
      const doesExist = await isRepositoryArchived(this.accessToken, this.owner, name);
      return doesExist ? "IsArchived" : "Exists";
    } catch (e) {
      return "DoesNotExist";
    }
  }

  async createRepository(
    name: string,
    isPrivate: boolean,
    description: string
  ): Promise<Repository> {
    await createRepository(this.accessToken, name, this.owner, isPrivate, description);
    return this.getRepository(name);
  }

  async searchRepositoriesByFile(filePath: string, contentSearchString: string): Promise<string[]> {
    const searchResults = await this.octokit.rest.search.code({
      q: `filename:${filePath} user:${this.owner} ${contentSearchString}`
    });

    return searchResults.data.items.map(item => item.repository.name);
  }

  async deleteRepository(name: string): Promise<void> {
    await deleteRepo(this.accessToken, this.owner, name);
  }
}
