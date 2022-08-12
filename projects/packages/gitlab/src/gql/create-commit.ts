import { FullyQualifiedBranch, refNameWithoutPrefix } from "@gitbuckets/abstractions";
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

  if (response.commitCreate?.commit?.__typename === "Commit") {
    return response.commitCreate.commit.sha;
  }

  throw new Error("Unable to create commit");
};
