import { gql } from "graphql-request";
import { client } from "./gql-client";

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

export const getAllRepositories = async (): Promise<string[]> => {
  const response = await client.request<GetAppRepositoriesResponse>(getAllRepositoriesQuery);
  const repositoryNames = response.projects.nodes.map(node => node.name);
  return repositoryNames;
};
