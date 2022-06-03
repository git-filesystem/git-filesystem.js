import { gql } from "graphql-request";
import { getClient } from "./gql-client";

const getIdForUserOrOrgQuery = gql`
  query GetIdForUserOrOrg($login: String!) {
    organization(login: $login) {
      id
    }
    user(login: $login) {
      id
    }
  }
`;

interface GetIdForUserOrOrgVariables {
  login: string;
}

interface GetIdForUserOrOrgResponse {
  organization: { id: string } | null;
  user: { id: string } | null;
}

export const getIdForUserOrOrg = async (accessToken: string, login: string) => {
  const variables: GetIdForUserOrOrgVariables = { login };
  const result = await getClient(accessToken, true).request<
    GetIdForUserOrOrgResponse,
    GetIdForUserOrOrgVariables
  >(getIdForUserOrOrgQuery, variables);

  if (result.organization) {
    return result.organization.id;
  }

  if (result.user) {
    return result.user.id;
  }

  throw new Error(`Could not find user or organization with login ${login}`);
};
