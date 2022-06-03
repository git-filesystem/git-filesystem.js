import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const isRepositoryArchivedQuery = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      isArchived
    }
  }
`;

interface IsRepositoryArchivedVariables {
  name: string;
  owner: string;
}

export interface IsRepositoryArchivedResponse {
  repository: {
    isArchived: boolean;
  };
}

export const isRepositoryArchived = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<boolean> => {
  const variables: IsRepositoryArchivedVariables = {
    name,
    owner
  };

  const response = await getClient(accessToken).request<
    IsRepositoryArchivedResponse,
    IsRepositoryArchivedVariables
  >(isRepositoryArchivedQuery, variables);

  return response.repository.isArchived;
};
