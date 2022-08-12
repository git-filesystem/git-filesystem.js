import { gql } from "graphql-request";
import { getClient } from "./sdk/gql-client";

export const query = gql`
  query getNamespaceId($name: ID!) {
    namespace(fullPath: $name) {
      id
    }
  }
`;

export const getNamespaceId = async (accessToken: string, owner: string): Promise<number> => {
  const response = await getClient(accessToken).getNamespaceId({
    name: owner
  });

  const fullId = response.namespace?.id;

  if (!fullId) {
    throw new Error(`Namespace ${owner} not found`);
  }

  const idParts = fullId.split("/");
  const lastIdPath = idParts[idParts.length - 1];
  return parseInt(lastIdPath);
};
