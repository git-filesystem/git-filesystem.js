import {
  CommitError,
  FullyQualifiedBranch,
  refNameWithoutPrefix
} from "@git-filesystem/abstractions";
import { getClient } from "./sdk/gql-client";

type CreateCommitAction = {
  action: "CREATE";
  content: string;
  filePath: string;
  encoding: CommitFileEncoding;
};

type UpdateCommitAction = {
  action: "UPDATE";
  content: string;
  filePath: string;
  encoding: CommitFileEncoding;
};

type DeleteCommitAction = {
  action: "DELETE";
  filePath: string;
};

export type CommitAction = CreateCommitAction | UpdateCommitAction | DeleteCommitAction;
export type CommitActionType = CommitAction["action"];

export type CommitFileEncoding = "TEXT" | "BASE64";

export const createCommit = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  appId: string,
  commitMessage: string,
  actions: CommitAction[]
): Promise<string> => {
  const { owner, repositoryName, ref } = branch;
  const branchName = refNameWithoutPrefix(ref);
  const fullPath = `${owner}/${repositoryName}`;

  const response = await getClient(accessToken).createCommit({
    fullPath,
    appId,
    branch: branchName,
    commitMessage,
    actions
  });

  if (
    !!response.commitCreate?.commit?.sha &&
    typeof response.commitCreate.commit.sha === "string"
  ) {
    return response.commitCreate.commit.sha;
  }

  if (response.commitCreate?.errors) {
    throw new CommitError(response.commitCreate.errors);
  }

  throw new Error("Unable to create commit");
};
