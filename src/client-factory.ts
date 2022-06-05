import { Client, GitUser, Provider } from "./client";
import { GitHubClient } from "./github/github-client";
import { GitLabClient } from "./gitlab/gitlab-client";
import { JsonConfig } from "./repository";

export class ClientFactory {
  public getClientForProvider(
    provider: Provider,
    owner: string,
    accessToken: string,
    applicationName: string,
    authorDetails: GitUser | null = null,
    committerDetails: GitUser | null = null,
    jsonConfig: JsonConfig | null = null
  ): Client {
    switch (provider) {
      case "github":
        return new GitHubClient(
          owner,
          accessToken,
          applicationName,
          authorDetails,
          committerDetails,
          jsonConfig
        );
      case "gitlab":
        return new GitLabClient(
          owner,
          accessToken,
          applicationName,
          authorDetails,
          committerDetails,
          jsonConfig
        );
      default:
        throw new Error(`No provider found for the value '${provider}'`);
    }
  }
}
