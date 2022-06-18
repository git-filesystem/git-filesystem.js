import { FullyQualifiedBranch, refNameWithoutPrefix } from "@gitbuckets/abstractions";
import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const mutation = gql`
  mutation (
    $fullPath: ID!
    $appId: String
    $branch: String!
    $commitMessage: String!
    $actions: [CommitAction!]!
  ) {
    commitCreate(
      input: {
        projectPath: $fullPath
        clientMutationId: $appId
        branch: $branch
        message: $commitMessage
        actions: $actions
      }
    ) {
      errors
      commit {
        sha
      }
    }
  }
`;

interface Variables {
  fullPath: string;
  appId: string;
  branch: string;
  commitMessage: string;
  actions: CommitAction[];
}

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

interface Response {
  commitCreate: {
    errors: string[];
    commit: {
      sha: string;
    };
  };
}

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

  const variables: Variables = {
    fullPath,
    appId,
    branch: branchName,
    commitMessage,
    actions
  };

  const response = await getClient(accessToken).request<Response, Variables>(mutation, variables);

  return response.commitCreate.commit.sha;
};
