import {
  Client,
  createFullyQualifiedBranch,
  GitUser,
  JsonConfig,
  Provider,
  Repository,
  RepositoryExistence
} from "@gitbuckets/abstractions";
import { GitLabRepository } from "./gitlab-repository";
import { getAllRepositories } from "./gql/get-all-repositories";
import { getAllRepositoriesForOwner } from "./gql/get-all-repositories-for-owner";
import { getNamespaceId } from "./gql/get-namespace-id";
import { isRepositoryArchived } from "./gql/is-repository-archived";
import { createProject } from "./rest/create-project";
import { deleteProject } from "./rest/delete-project";

export class GitLabClient extends Client {
  readonly provider: Provider = "gitlab";
  private namespaceId: number | undefined;

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
    const fqBranch = createFullyQualifiedBranch(owner ?? this.owner, name, "main");

    return new GitLabRepository(
      this.accessToken,
      fqBranch,
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
    const namespaceId = await this.getNamespaceId();

    await createProject(this.accessToken, namespaceId, name, description, isPrivate);

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

  private async getNamespaceId(): Promise<number> {
    if (!this.namespaceId) {
      this.namespaceId = await getNamespaceId(this.accessToken, this.owner);
    }

    return this.namespaceId;
  }
}
