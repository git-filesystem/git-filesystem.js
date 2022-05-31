import { gql } from "graphql-request";
import { client } from "./gql-client";

/*

This file isn't very as it can't yet search but file content :/

*/

const searchRepositoriesByFileQuery = gql`
  query ($filePath: String) {
    projects(membership: true) {
      nodes {
        fullPath
        repository {
          tree(path: $filePath) {
            lastCommit {
              shortId
            }
          }
        }
      }
    }
  }
`;

interface SearchRepositoriesByFileVariables {
  filePath: string;
}

interface SearchRepositoriesByFileResponse {
  project: {
    nodes: ProjectNode[];
  };
}

interface ProjectNode {
  fullPath: string;
  repository: {
    tree?: {
      lastCommit?: {
        shortId?: string;
      };
    };
  };
}

export const searchByFilePath = async (filePath: string): Promise<string[]> => {
  const variables: SearchRepositoriesByFileVariables = {
    filePath
  };

  const response = await client.request<
    SearchRepositoriesByFileResponse,
    SearchRepositoriesByFileVariables
  >(searchRepositoriesByFileQuery, variables);

  const repositoryNames = response.project.nodes
    .filter(n => !!n.repository.tree?.lastCommit?.shortId)
    .map(n => n.fullPath);

  return repositoryNames;
};
