import { AxiosResponse } from "axios";
import { base64encode } from "../../utils/base64";
import { getRestClient } from "./rest-client";

interface RequestBody {
  message: string;
  content: string;
  branch: string;
  committer: GitHubGitUser | null;
  author: GitHubGitUser | null;
}

interface GitHubGitUser {
  name: string;
  email: string;
}

interface RequestResponse {
  sha: string;
}

export const createFile = async (
  accessToken: string,
  owner: string,
  repo: string,
  fileName: string,
  content: string,
  committer: GitHubGitUser | null,
  author: GitHubGitUser | null
): Promise<string> => {
  const path = `repos/${owner}/${repo}/contents/${fileName}`;

  const base64Content = base64encode(content);

  const body: RequestBody = {
    message: `Create ${fileName}`,
    content: base64Content,
    branch: "main",
    committer,
    author
  };

  const { data } = await getRestClient(accessToken).put<
    RequestResponse,
    AxiosResponse<RequestResponse>,
    RequestBody
  >(path, body);

  return data.sha;
};
