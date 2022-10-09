import { RestClient } from "@git-filesystem/abstractions";

export const getRestClient = (accessToken: string): RestClient => new GitHubRestClient(accessToken);

class GitHubRestClient extends RestClient {
  constructor(accessToken: string) {
    const baseURL = "https://api.github.com";

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
      Authorization: "token " + accessToken
    };

    super(baseURL, headers);
  }
}
