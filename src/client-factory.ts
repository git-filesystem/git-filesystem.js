import { Client, GitUser } from "./client";
import { GitHubClient } from "./github/github-client";

export class ClientFactory {
  public getClientForProvider(
    provider: string,
    owner: string,
    accessToken: string,
    applicationName: string,
    authorDetails: GitUser | null = null,
    committerDetails: GitUser | null = null
  ): Client {
    switch (provider) {
      case "github":
        return new GitHubClient(
          owner,
          accessToken,
          applicationName,
          authorDetails,
          committerDetails
        );
      default:
        throw new Error(`No provider found for the value '${provider}'`);
    }
  }
}
