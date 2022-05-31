import { GitUser, Provider } from "../../client";
import { JsonConfig } from "../../repository";

export class GitHubRepository {
  provider: Provider = "github";

  constructor(
    public readonly owner: string,
    public readonly repositoryName: string,
    public readonly accessToken: string,
    public readonly applicationName: string,
    public readonly authorDetails: GitUser | null = null,
    public readonly committerDetails: GitUser | null = null,
    public readonly jsonConfig: JsonConfig | null = null
  ) {}
}
