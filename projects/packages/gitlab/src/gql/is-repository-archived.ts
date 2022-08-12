import { gql } from "graphql-request";
import { getClient } from "./gql-client";

export const query = gql`
  query ($fullPath: ID!) {
    project(fullPath: $fullPath) {
      archived
    }
  }
`;

interface Variables {
  fullPath: string;
}

interface Response {
  project: {
    archived: boolean;
  };
}

export const isRepositoryArchived = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<boolean> => {
  const fullPath = `${owner}/${name}`;

  const variables: Variables = {
    fullPath
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  return response.project.archived;
};
