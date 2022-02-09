import { Client } from "./client";
import { GitHubClient } from "./github/github-client";

export class ClientFactory {
  public getClientForProvider(
    provider: string,
    owner: string,
    accessToken: string,
    applicationName: string
  ): Client {
    switch (provider) {
      case "github":
        return new GitHubClient(owner, accessToken, applicationName);
      default:
        throw new Error(`No provider found for the value '${provider}'`);
    }
  }
}
