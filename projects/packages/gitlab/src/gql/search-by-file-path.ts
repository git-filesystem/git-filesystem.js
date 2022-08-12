import { gql } from "graphql-request";
import { getClient } from "./gql-client";

/*

This file isn't very useful as it can't yet search by file content :/

*/

export const query = gql`
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

interface Variables {
  filePath: string;
}

interface Response {
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

export const searchByFilePath = async (
  accessToken: string,
  filePath: string
): Promise<string[]> => {
  const variables: Variables = {
    filePath
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  const repositoryNames = response.project.nodes
    .filter(n => !!n.repository.tree?.lastCommit?.shortId)
    .map(n => n.fullPath);

  return repositoryNames;
};
