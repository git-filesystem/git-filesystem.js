import { FullyQualifiedBranch } from "@git-filesystem/abstractions";
import { getRestClient } from "./rest-client";

export type CreateCommitAction = {
  action: "CREATE";
  content: string;
  filePath: string;
};

export type UpdateCommitAction = {
  action: "UPDATE";
  content: string;
  filePath: string;
};

export type DeleteCommitAction = {
  action: "DELETE";
  filePath: string;
};

export type CommitAction = CreateCommitAction | UpdateCommitAction | DeleteCommitAction;

interface RequestBody {
  base_tree: string | undefined | null;
  tree: TreeNode[];
}

interface TreeNode {
  path: string;
  mode: "100644";
  type: "blob";
  content?: string;
  sha?: null;
}

interface RequestResponse {
  sha: string;
}

export const createTree = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  baseTree: string | null,
  commitActions: CommitAction[]
): Promise<string> => {
  const { owner, repositoryName } = branch;

  const path = `repos/${owner}/${repositoryName}/git/trees`;

  const tree: TreeNode[] = mapCommitActions(commitActions);

  const body: RequestBody = {
    base_tree: baseTree,
    tree
  };

  const { data } = await getRestClient(accessToken).post<RequestBody, RequestResponse>(path, body);

  return data.sha;
};

const mapCommitActions = (commitActions: CommitAction[]): TreeNode[] => {
  const treeNodes: TreeNode[] = [];

  for (const commitAction of commitActions) {
    if (commitAction.action === "CREATE" || commitAction.action === "UPDATE") {
      treeNodes.push({
        path: commitAction.filePath,
        type: "blob",
        mode: "100644",
        content: commitAction.content
      });
      continue;
    }

    if (commitAction.action === "DELETE") {
      treeNodes.push({
        path: commitAction.filePath,
        type: "blob",
        mode: "100644",
        sha: null
      });
      continue;
    }

    throw new Error("Invalid commit action: " + (commitAction as { action: string })?.action);
  }

  return treeNodes;
};
