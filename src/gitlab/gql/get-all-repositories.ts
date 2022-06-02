import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const getAllRepositoriesQuery = gql`
  projects(membership: true) {
    nodes {
      name
    }
  }
`;

interface GetAppRepositoriesResponse {
  projects: {
    nodes: ProjectNode[];
  };
}

interface ProjectNode {
  name: string;
}

export const getAllRepositories = async (accessToken: string): Promise<string[]> => {
  const response = await getClient(accessToken).request<GetAppRepositoriesResponse>(
    getAllRepositoriesQuery
  );
  const repositoryNames = response.projects.nodes.map(node => node.name);
  return repositoryNames;
};
