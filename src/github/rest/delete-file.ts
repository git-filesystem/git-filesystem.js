import { AxiosResponse } from "axios";
import { getRestClient } from "./rest-client";

interface RequestBody {
  message: string;
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

export const deleteFile = async (
  accessToken: string,
  owner: string,
  repo: string,
  fileName: string,
  branch: string,
  fileBlobSha: string,
  committer: GitHubGitUser | null,
  author: GitHubGitUser | null
): Promise<string> => {
  const path = `repos/${owner}/${repo}/contents/${fileName}`;

  const body: RequestBody = {
    message: `Delete ${fileName}`,
    branch,
    sha: fileBlobSha,
    committer,
    author
  };

  const { data } = await getRestClient(accessToken).delete<
    RequestResponse,
    AxiosResponse<RequestResponse>,
    RequestBody
  >(path, { data: body });

  return data.sha;
};
