import { AxiosResponse } from "axios";
import { base64encode } from "../../utils/base64";
import { getRestClient } from "./rest-client";

interface RequestBody {
  message: string;
  content: string;
  branch: string;
  sha: string;
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

export const updateFile = async (
  accessToken: string,
  owner: string,
  repo: string,
  fileName: string,
  content: string,
  branch: string,
  fileBlobSha: string,
  committer: GitHubGitUser | null,
  author: GitHubGitUser | null
): Promise<string> => {
  const path = `repos/${owner}/${repo}/contents/${fileName}`;

  const base64Content = base64encode(content);

  const body: RequestBody = {
    message: `Update ${fileName}`,
    content: base64Content,
    branch,
    sha: fileBlobSha,
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
