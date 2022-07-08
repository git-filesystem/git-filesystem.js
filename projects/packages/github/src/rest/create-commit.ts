import { FullyQualifiedBranch } from "@gitbuckets/abstractions";
import { getBranchSha } from "../gql/get-branch-sha";
import { createInitialCommit } from "./create-initial-commit";
import { CommitAction, createTree } from "./create-tree";
import { getRestClient } from "./rest-client";
import { updateBranchSha } from "./update-branch-sha";

export interface GitHubGitUser {
  name: string;
  email: string;
}

interface RequestBody {
  message: string;
  tree: string;
  parents: readonly [string] | undefined;
  author: GitHubGitUser | null;
  committer: GitHubGitUser | null;
}

interface RequestResponse {
  sha: string;
}

export const createCommit = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  commitActions: CommitAction[],
  commitMessage?: string,
  committer: GitHubGitUser | null = null,
  author: GitHubGitUser | null = null
): Promise<string> => {
  const { owner, repositoryName } = branch;

  let currentShaOnBranch = await getBranchSha(accessToken, branch);
  const repoIsEmpty = !currentShaOnBranch;

  if (!currentShaOnBranch) {
    currentShaOnBranch = await createInitialCommit(accessToken, branch);
  }

  const baseTree = repoIsEmpty ? null : currentShaOnBranch;
  const shaOfTree = await createTree(accessToken, branch, baseTree, commitActions);

  const path = `repos/${owner}/${repositoryName}/git/commits`;

  const body: RequestBody = {
    message: commitMessage ?? "Updated files",
    tree: shaOfTree,
    parents: [currentShaOnBranch],
    author,
    committer
  };

  const { data } = await getRestClient(accessToken).post<RequestBody, RequestResponse>(path, body);
  const { sha } = data;

  await updateBranchSha(accessToken, branch, sha);

  return sha;
};
