import { gql } from "graphql-request";
import { getClient } from "./gql-client";

export const query = gql`
  query ($name: ID!) {
    namespace(fullPath: $name) {
      id
    }
  }
`;

interface Variables {
  name: string;
}

interface Response {
  namespace?: {
    id: string;
  };
}

export const getNamespaceId = async (accessToken: string, owner: string): Promise<number> => {
  const variables: Variables = {
    name: owner
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  const fullId = response.namespace?.id;

  if (!fullId) {
    throw new Error(`Namespace ${owner} not found`);
  }

  const idParts = fullId.split("/");
  const lastIdPath = idParts[idParts.length - 1];
  return parseInt(lastIdPath);
};
