import { Octokit } from "octokit";
import { Client, GitUser, RepositoryExistence } from "../client";
import { JsonConfig, Repository } from "../repository";
import { GitHubRepository } from "./github-repository";
import {
  CreateRepository,
  createRepositoryQuery,
  createRepositoryVariables
} from "./gql/create-repository";
import {
  DoesRepositoryExist,
  doesRepositoryExistQuery,
  doesRepositoryExistVariables
} from "./gql/does-repository-exist";

export class GitHubClient implements Client {
  private octokit: Octokit;

  constructor(
    private readonly owner: string,
    private readonly accessToken: string,
    private readonly applicationName: string,
    private readonly authorDetails: GitUser | null = null,
    private readonly committerDetails: GitUser | null = null,
    private readonly jsonConfig: JsonConfig | null = null
  ) {
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
  }

  getAllRepositories(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }

  getRepository(name: string): Repository {
    return new GitHubRepository(
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
      const result = await this.octokit.graphql<DoesRepositoryExist>(
        doesRepositoryExistQuery,
        doesRepositoryExistVariables(name, this.owner)
      );

      return result.repository.isArchived ? "IsArchived" : "Exists";
    } catch {
      return "DoesNotExist";
    }
  }

  async createRepository(
    name: string,
    isPrivate: boolean,
    description: string
  ): Promise<Repository> {
    await this.octokit.graphql<CreateRepository>(
      createRepositoryQuery,
      createRepositoryVariables(name, isPrivate, description)
    );

    return new GitHubRepository(
      this.owner,
      name,
      this.accessToken,
      this.applicationName,
      this.authorDetails,
      this.committerDetails,
      this.jsonConfig
    );
  }

  async searchRepositoriesByFile(filePath: string, contentSearchString: string): Promise<string[]> {
    const searchResults = await this.octokit.rest.search.code({
      q: `filename:${filePath} user:${this.owner} ${contentSearchString}`
    });

    return searchResults.data.items.map(item => item.repository.name);
  }

  async deleteRepository(name: string): Promise<void> {
    const response = await this.octokit.rest.repos.delete({
      owner: this.owner,
      repo: name
    });

    if (response.status !== 204) {
      throw new Error(`Failed to delete repository with status code: ${response.status}`);
    }
  }
}
