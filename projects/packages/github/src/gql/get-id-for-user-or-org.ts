import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const query = gql`
  query GetIdForUserOrOrg($login: String!) {
    repositoryOwner(login: $login) {
      id
    }
  }
`;

interface Variables {
  login: string;
}

interface Response {
  repositoryOwner: { id: string } | null;
}

export const getIdForUserOrOrg = async (accessToken: string, login: string) => {
  const variables: Variables = { login };
  const result = await getClient(accessToken).request<Response, Variables>(query, variables);

  if (result.repositoryOwner?.id) {
    return result.repositoryOwner?.id;
  }

  throw new Error(`Could not find user or organization with login ${login}`);
};
