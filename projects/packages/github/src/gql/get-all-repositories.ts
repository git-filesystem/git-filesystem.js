import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query {
    viewer {
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

interface Response {
  viewer: {
    repositories: {
      nodes: Repo[];
    };
  };
}

interface Repo {
  nameWithOwner: string;
}

export const getAllRepositories = async (accessToken: string) => {
  const response = await getClient(accessToken).request<Response>(query);

  return response.viewer.repositories.nodes.map(repo => repo.nameWithOwner);
};
