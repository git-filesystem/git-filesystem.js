import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($login: String!) {
    repositoryOwner(login: $login) {
      repositories(
        ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
        affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
        orderBy: { field: PUSHED_AT, direction: DESC }
        first: 100
      ) {
        nodes {
          nameWithOwner
        }
      }
    }
  }
`;

interface Variables {
  login: string;
}

interface Response {
  repositoryOwner?: {
    repositories: {
      nodes: Repo[];
    };
  };
}

interface Repo {
  nameWithOwner: string;
}

export const getAllRepositoriesForOwner = async (accessToken: string, owner: string) => {
  const variables: Variables = {
    login: owner
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  if (response.repositoryOwner?.repositories?.nodes) {
    return response.repositoryOwner?.repositories?.nodes.map(repo => repo.nameWithOwner);
  }

  throw new Error(`Could not find repositories for owner ${owner}`);
};
