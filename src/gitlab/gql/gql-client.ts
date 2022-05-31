import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("https://gitlab.com/api/graphql", { headers: {} });
