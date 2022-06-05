import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const getIdForUserOrOrgQuery = gql`
  query GetIdForUserOrOrg($login: String!) {
    repositoryOwner(login: $login) {
      id
    }
  }
`;

interface GetIdForUserOrOrgVariables {
  login: string;
}

interface GetIdForUserOrOrgResponse {
  repositoryOwner: { id: string } | null;
}

export const getIdForUserOrOrg = async (accessToken: string, login: string) => {
  const variables: GetIdForUserOrOrgVariables = { login };
  const result = await getClient(accessToken).request<
    GetIdForUserOrOrgResponse,
    GetIdForUserOrOrgVariables
  >(getIdForUserOrOrgQuery, variables);

  if (result.repositoryOwner?.id) {
    return result.repositoryOwner?.id;
  }

  throw new Error(`Could not find user or organization with login ${login}`);
};
