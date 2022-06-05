import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const getAllRepositoriesQuery = gql`
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

interface GetAllRepositoriesQueryResponse {
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
  const response = await getClient(accessToken).request<GetAllRepositoriesQueryResponse>(
    getAllRepositoriesQuery
  );

  return response.viewer.repositories.nodes.map(repo => repo.nameWithOwner);
};
