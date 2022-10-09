import { Client, GitUser, JsonConfig, Provider } from "@git-filesystem/abstractions";
import { GitHubClient } from "@git-filesystem/github";
import { GitLabClient } from "@git-filesystem/gitlab";

export class ClientFactory {
  public getClientForProvider(
    provider: Provider,
    owner: string,
    accessToken: string,
    applicationName: string,
    authorDetails?: GitUser,
    committerDetails?: GitUser,
    jsonConfig?: JsonConfig
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
