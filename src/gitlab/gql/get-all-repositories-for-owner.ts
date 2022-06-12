import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const getAllRepositoriesForOwnerQuery = gql`
  query ($login: ID!) {
    namespace(fullPath: $login) {
      projects {
        nodes {
          fullPath
        }
      }
    }
  }
`;

interface GetAllRepositoriesForOwnerVariables {
  login: string;
}

interface GetAppRepositoriesResponse {
  projects: {
    nodes?: ProjectNode[];
  };
}

interface ProjectNode {
  name: string;
}

export const getAllRepositoriesForOwner = async (
  accessToken: string,
  owner: string
): Promise<string[]> => {
  const variables: GetAllRepositoriesForOwnerVariables = {
    login: owner
  };

  const response = await getClient(accessToken).request<
    GetAppRepositoriesResponse,
    GetAllRepositoriesForOwnerVariables
  >(getAllRepositoriesForOwnerQuery, variables);

  return response.projects.nodes?.map(node => node.name) ?? [];
};
