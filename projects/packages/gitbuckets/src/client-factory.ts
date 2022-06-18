import { Client, GitUser, JsonConfig, Provider } from "@gitbuckets/abstractions";
import { GitHubClient } from "@gitbuckets/github";
import { GitLabClient } from "@gitbuckets/gitlab";

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
