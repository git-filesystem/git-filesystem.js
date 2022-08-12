import { gql } from "graphql-request";
import { getClient } from "./gql-client";

export const query = gql`
  query {
    projects(membership: true) {
      nodes {
        name
        namespace {
          path
        }
      }
    }
  }
`;

interface Response {
  projects: {
    nodes: {
      name: string;
      namespace: {
        path: string;
      };
    }[];
  };
}

export const getAllRepositories = async (accessToken: string): Promise<string[]> => {
  const response = await getClient(accessToken).request<Response>(query);
  return response.projects.nodes.map(node => `${node.namespace.path}/${node.name}`);
};
