import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query {
    projects(membership: true) {
      nodes {
        name
      }
    }
  }
`;

interface Response {
  projects: {
    nodes: ProjectNode[];
  };
}

interface ProjectNode {
  name: string;
}

export const getAllRepositories = async (accessToken: string): Promise<string[]> => {
  const response = await getClient(accessToken).request<Response>(query);
  return response.projects.nodes.map(node => node.name);
};
