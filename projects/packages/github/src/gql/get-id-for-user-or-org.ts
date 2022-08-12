import { getClient } from "./sdk/gql-client";

export const getIdForUserOrOrg = async (accessToken: string, login: string) => {
  const result = await getClient(accessToken).getIdForUserOrOrg({ login });

  if (result.repositoryOwner?.id) {
    return result.repositoryOwner?.id;
  }

  throw new Error(`Could not find user or organization with login ${login}`);
};
