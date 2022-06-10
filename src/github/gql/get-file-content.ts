import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const getFileContentQuery = gql`
  query ($owner: String!, $repo: String!, $expression: String) {
    repository(owner: $owner, name: $repo) {
      object(expression: $expression) {
        ... on Blob {
          text
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
      text: string;
    };
  };
}

export const getFileContent = async (
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

  const response = await getClient(accessToken).request<Response, Variables>(
    getFileContentQuery,
    variables
  );

  if (response.repository.object) {
    return response.repository.object.text;
  }

  throw new Error(`File ${path} not found`);
};
