import { gql } from "graphql-request";
import { client } from "./gql-client";

const createCommitMutation = gql`
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

interface CreateCommitMutationVariables {
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

interface CreateCommitMutationResponse {
  commitCreate: {
    errors: string[];
    commit?: {
      sha: string;
    };
  };
}

interface CreateCommitResult {
  errors: string[];
  sha?: string;
}

export const createCommit = async (
  fullPath: string,
  appId: string,
  branch: string,
  commitMessage: string,
  actions: CommitAction[]
): Promise<CreateCommitResult> => {
  const response = await client.request<
    CreateCommitMutationResponse,
    CreateCommitMutationVariables
  >(createCommitMutation, {
    fullPath,
    appId,
    branch,
    commitMessage,
    actions
  });

  return {
    errors: response.commitCreate.errors,
    sha: response.commitCreate.commit?.sha
  };
};
