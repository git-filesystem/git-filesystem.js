import { GraphQLClient } from "graphql-request";

export const getClient = (accessToken: string) =>
  new GraphQLClient("https://gitlab.com/api/graphql", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
