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
  author: GitHubGitUser | undefined;
  committer: GitHubGitUser | undefined;
}

interface RequestResponse {
  sha: string;
}

export const createCommit = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  commitActions: CommitAction[],
  commitMessage?: string,
  committer: GitHubGitUser | undefined = undefined,
  author: GitHubGitUser | undefined = undefined
): Promise<string> => {
  const { owner, repositoryName } = branch;

  console.log("Before getting sha");
  let currentShaOnBranch = await getBranchSha(accessToken, branch);
  const repoIsEmpty = !currentShaOnBranch;
  console.log("After getting sha");

  if (!currentShaOnBranch) {
    console.log("Before creating initial commit");
    currentShaOnBranch = await createInitialCommit(accessToken, branch);
    console.log("After creating initial commit");
  }

  console.log("Before create tree");
  const baseTree = repoIsEmpty ? null : currentShaOnBranch;
  const shaOfTree = await createTree(accessToken, branch, baseTree, commitActions);
  console.log("After create tree");

  const path = `repos/${owner}/${repositoryName}/git/commits`;

  const body: RequestBody = {
    message: commitMessage ?? "Updated files",
    tree: shaOfTree,
    parents: [currentShaOnBranch],
    author,
    committer
  };

  console.log("Before create commit");
  const { data } = await getRestClient(accessToken).post<RequestBody, RequestResponse>(path, body);
  const { sha } = data;
  console.log("After create commit");

  console.log("Before update branch");
  await updateBranchSha(accessToken, branch, sha);
  console.log("After update branch");

  return sha;
};
