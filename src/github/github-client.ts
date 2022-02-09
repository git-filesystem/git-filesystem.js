import { Octokit } from "octokit";
import { Client, RepositoryExistence } from "../client";
import { Repository } from "../repository";
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
    private readonly applicationName: string
  ) {
    this.octokit = new Octokit({ auth: accessToken, userAgent: applicationName });
  }

  getAllRepositories(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }

  async getRepository(name: string): Promise<Repository> {
    const exists = await this.doesRepositoryExist(name);

    if (exists === "DoesNotExist") {
      throw new Error(`The repository ${name} does not exist.`);
    }

    if (exists === "IsArchived") {
      // TODO: make IReadonlyRepository
      throw new Error(
        `The repository ${name} is read only. To access it, use the method getReadonlyRepository.`
      );
    }

    return new GitHubRepository(this.owner, name, this.accessToken, this.applicationName);
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

    return new GitHubRepository(this.owner, name, this.accessToken, this.applicationName);
  }
}
