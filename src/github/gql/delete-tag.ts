import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const mutation = gql`
  mutation ($tag: ID!) {
    deleteRef(input: { refId: $tag }) {
      clientMutationId
    }
  }
`;

interface Variables {
  tag: string;
}

interface Response {
  deleteRef: {
    clientMutationId: null;
  };
}

export const deleteTag = async (accessToken: string, tagId: string): Promise<void> => {
  const variables: Variables = {
    tag: tagId
  };

  await getClient(accessToken).request<Response, Variables>(mutation, variables);
};
