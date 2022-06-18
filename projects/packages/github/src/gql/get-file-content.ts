import { FullyQualifiedRef } from "@gitbuckets/abstractions";
import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($owner: String!, $repositoryName: String!, $expression: String) {
    repository(owner: $owner, name: $repositoryName) {
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
  repositoryName: string;
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
  fqRef: FullyQualifiedRef,
  path: string
) => {
  const { owner, repositoryName, ref } = fqRef;

  const variables: Variables = {
    owner,
    repositoryName,
    expression: `${ref}:${path}`
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  if (response.repository.object) {
    return response.repository.object.text;
  }

  throw new Error(`File ${path} not found`);
};
