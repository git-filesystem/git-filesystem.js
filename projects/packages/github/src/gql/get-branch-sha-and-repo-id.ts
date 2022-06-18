import { FullyQualifiedBranch } from "@gitbuckets/abstractions";
import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($owner: String!, $name: String!, $branch: String!) {
    repository(owner: $owner, name: $name) {
      id
      ref(qualifiedName: $branch) {
        target {
          oid
        }
      }
    }
  }
`;

interface Response {
  repository?: {
    id: string;
    ref?: {
      target: {
        oid: string;
      };
    };
  };
}

interface Variables {
  owner: string;
  name: string;
  branch: string;
}

export interface Result {
  branchSha: string;
  repoId: string;
}

export const getBranchShaAndRepoId = async (
  accessToken: string,
  fqBranch: FullyQualifiedBranch
) => {
  const { owner, repositoryName, ref } = fqBranch;

  const variables: Variables = {
    owner,
    name: repositoryName,
    branch: ref
  };

  const result = await getClient(accessToken).request<Response, Variables>(query, variables);

  const branchSha = result.repository?.ref?.target?.oid;
  const repoId = result.repository?.id;

  if (!branchSha || !repoId) {
    throw new Error(`Could not get branch sha or repo id for ${fqBranch}`);
  }

  return { branchSha, repoId };
};
