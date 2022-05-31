import { gql } from "graphql-request";
import { client } from "./gql-client";

const isRepositoryArchivedQuery = gql`
  query ($fullPath: ID!) {
    project(fullPath: $fullPath) {
      archived
    }
  }
`;

interface IsRepositoryArchivedVariables {
  fullPath: string;
}

interface IsRepositoryArchivedResponse {
  project: {
    archived: boolean;
  };
}

export const isRepositoryArchived = async (owner: string, name: string): Promise<boolean> => {
  const fullPath = `${owner}/${name}`;

  const variables: IsRepositoryArchivedVariables = {
    fullPath
  };

  const response = await client.request<
    IsRepositoryArchivedResponse,
    IsRepositoryArchivedVariables
  >(isRepositoryArchivedQuery, variables);

  return response.project.archived;
};
