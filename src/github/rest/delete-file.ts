import { AxiosResponse } from "axios";
import { FullyQualifiedBranch } from "../../ref";
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
  branch: FullyQualifiedBranch,
  fileName: string,
  fileBlobSha: string,
  committer: GitHubGitUser | null,
  author: GitHubGitUser | null
): Promise<string> => {
  const { owner, repositoryName, ref } = branch;
  const path = `repos/${owner}/${repositoryName}/contents/${fileName}`;

  const body: RequestBody = {
    message: `Delete ${fileName}`,
    branch: ref,
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
