import { RestClient } from "@git-filesystem/abstractions";

export const getRestClient = (accessToken: string, parseResponseBody = true): RestClient =>
  new GitLabRestClient(accessToken, parseResponseBody);

class GitLabRestClient extends RestClient {
  constructor(accessToken: string, parseResponseBody = true) {
    const baseUrl = "https://gitlab.com/api/v4";

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "PRIVATE-TOKEN": accessToken
    };

    super(baseUrl, headers, parseResponseBody);
  }
}
