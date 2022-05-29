import { gql } from "graphql-request";

export const createRepositoryQuery = gql`
  mutation ($input: CreateRepositoryInput!) {
    createRepository(input: $input) {
      clientMutationId
    }
  }
`;

export const createRepositoryVariables = (name: string, isPrivate = true, description: string) => ({
  input: {
    name,
    visibility: isPrivate ? "PRIVATE" : "PUBLIC",
    description,
    template: false
  }
});

export interface CreateRepository {
  createRepository: {
    clientMutationId: null;
  };
}
