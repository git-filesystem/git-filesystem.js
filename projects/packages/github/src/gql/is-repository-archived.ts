import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      isArchived
    }
  }
`;

interface Variables {
  name: string;
  owner: string;
}

export interface Response {
  repository: {
    isArchived: boolean;
  };
}

export const isRepositoryArchived = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<boolean> => {
  const variables: Variables = {
    name,
    owner
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  return response.repository.isArchived;
};
