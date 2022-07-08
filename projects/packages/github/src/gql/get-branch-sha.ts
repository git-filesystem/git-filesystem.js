import { FullyQualifiedBranch } from "@gitbuckets/abstractions";
import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($owner: String!, $name: String!, $branch: String!) {
    repository(owner: $owner, name: $name) {
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

export const getBranchSha = async (
  accessToken: string,
  fqBranch: FullyQualifiedBranch
): Promise<string | undefined> => {
  const { owner, repositoryName, ref } = fqBranch;

  const variables: Variables = {
    owner,
    name: repositoryName,
    branch: ref
  };

  const result = await getClient(accessToken).request<Response, Variables>(query, variables);

  const branchSha = result.repository?.ref?.target?.oid;

  return branchSha ?? undefined;
};
