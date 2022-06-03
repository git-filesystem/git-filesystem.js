import { GraphQLClient } from "graphql-request";

export const getClient = (accessToken: string, allowErrors = false) =>
  new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    errorPolicy: allowErrors ? "all" : "none"
  });
