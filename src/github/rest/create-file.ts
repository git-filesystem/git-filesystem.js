import { AxiosResponse } from "axios";
import { FullyQualifiedBranch } from "../../ref";
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
  branch: FullyQualifiedBranch,
  fileName: string,
  content: string,
  committer: GitHubGitUser | null,
  author: GitHubGitUser | null
): Promise<string> => {
  const { owner, repositoryName, ref } = branch;
  const path = `repos/${owner}/${repositoryName}/contents/${fileName}`;
  const base64Content = base64encode(content);

  const body: RequestBody = {
    message: `Create ${fileName}`,
    content: base64Content,
    branch: ref,
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