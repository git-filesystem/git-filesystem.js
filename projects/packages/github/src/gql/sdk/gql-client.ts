import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk.generated";

export const getClient = (accessToken: string) => {
  const gqlClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  return getSdk(gqlClient);
};
