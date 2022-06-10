import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($owner: String!, $repo: String!, $expression: String) {
    repository(owner: $owner, name: $repo) {
      object(expression: $expression) {
        ... on Blob {
          oid
        }
      }
    }
  }
`;

interface Variables {
  owner: string;
  repo: string;
  expression: string;
}

interface Response {
  repository: {
    object?: {
      oid: string;
    };
  };
}

export const getFileSha = async (
  accessToken: string,
  owner: string,
  repo: string,
  ref: string,
  path: string
) => {
  const variables: Variables = {
    owner,
    repo,
    expression: `${ref}:${path}`
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  if (response.repository.object) {
    return response.repository.object.oid;
  }

  throw new Error(`File ${path} not found`);
};
