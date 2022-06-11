import { gql } from "graphql-request";
import { FullyQualifiedBranch, FullyQualifiedTagRef } from "../../ref";
import { getBranchShaAndRepoId } from "./get-branch-sha-and-repo-id";
import { getClient } from "./gql-client";

const mutation = gql`
  mutation ($repoId: ID!, $name: String!, $sha: GitObjectID!) {
    createRef(input: { repositoryId: $repoId, name: $name, oid: $sha }) {
      clientMutationId
    }
  }
`;

interface Response {
  clientMutationId: null;
}

interface Variables {
  repoId: string;
  name: string;
  sha: string;
}

export const createTag = async (
  accessToken: string,
  fqBranch: FullyQualifiedBranch,
  ref: FullyQualifiedTagRef
) => {
  const { repoId, branchSha } = await getBranchShaAndRepoId(accessToken, fqBranch);

  const variables: Variables = {
    repoId,
    name: ref,
    sha: branchSha
  };

  await getClient(accessToken).request<Response, Variables>(mutation, variables);
};
