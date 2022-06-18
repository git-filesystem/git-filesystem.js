import { GraphQLClient } from "graphql-request";

export const getClient = (accessToken: string) =>
  new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
