import { FullyQualifiedTag } from "@gitbuckets/abstractions";
import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($owner: String!, $repo: String!, $tag: String!) {
    repository(owner: $owner, name: $repo) {
      ref(qualifiedName: $tag) {
        id
      }
    }
  }
`;

interface Variables {
  owner: string;
  repo: string;
  tag: string;
}

interface Response {
  repository?: {
    ref?: {
      id: string;
    };
  };
}

export const getRefIdForTag = async (
  accessToken: string,
  fqTag: FullyQualifiedTag
): Promise<string> => {
  const { owner, repositoryName, ref } = fqTag;

  const variables: Variables = {
    owner,
    repo: repositoryName,
    tag: ref
  };

  const response = await getClient(accessToken).request<Response, Variables>(query, variables);

  const refId = response.repository?.ref?.id;

  if (!refId) {
    throw new Error(`Tag ${ref} not found`);
  }

  return refId;
};
