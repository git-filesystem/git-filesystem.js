import { fqTagRefPrefix, FullyQualifiedTagRef } from "@gitbuckets/abstractions";
import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      refs(first: 100, refPrefix: "refs/tags/") {
        nodes {
          name
        }
      }
    }
  }
`;

interface Variables {
  name: string;
  owner: string;
}

interface Response {
  repository?: {
    refs: {
      nodes: {
        name: string;
      }[];
    };
  };
}

export const getAllTags = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<FullyQualifiedTagRef[]> => {
  const variables: Variables = {
    name,
    owner
  };

  const response: Response = await getClient(accessToken).request(query, variables);

  if (!response.repository) {
    throw new Error(`No repository found for ${owner}/${name}`);
  }

  return response.repository.refs.nodes.map<FullyQualifiedTagRef>(
    ({ name }) => `${fqTagRefPrefix}${name}`
  );
};
