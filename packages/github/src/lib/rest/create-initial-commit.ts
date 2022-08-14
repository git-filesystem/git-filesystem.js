import { FullyQualifiedBranch } from "@gitbuckets/abstractions";
import { base64encode } from "@gitbuckets/utils";
import { GitHubGitUser } from "./create-commit";
import { getRestClient } from "./rest-client";

interface RequestBody {
  message: string;
  content: string;
  branch: string;
  committer: GitHubGitUser | undefined;
  author: GitHubGitUser | undefined;
}

interface RequestResponse {
  commit: {
    sha: string;
  };
}

const fileName = "temp-file.txt";
const base64Content = base64encode(
  "This temporary file is needed due to limitations with the GitHub API."
);

export const createInitialCommit = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  committer: GitHubGitUser | undefined = undefined,
  author: GitHubGitUser | undefined = undefined
): Promise<string> => {
  const { owner, repositoryName, ref } = branch;
  const path = `repos/${owner}/${repositoryName}/contents/${fileName}`;

  const body: RequestBody = {
    message: `Create ${fileName}`,
    content: base64Content,
    branch: ref,
    committer,
    author
  };

  const { data } = await getRestClient(accessToken).put<RequestBody, RequestResponse>(path, body);

  return data.commit.sha;
};
