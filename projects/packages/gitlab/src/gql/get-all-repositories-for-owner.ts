import { gql } from "graphql-request";
import { getClient } from "./gql-client";

export const query = gql`
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

interface Variables {
  login: string;
}

interface Response {
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
  const variables: Variables = {
    login: owner
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  return response.projects.nodes?.map(node => node.name) ?? [];
};
