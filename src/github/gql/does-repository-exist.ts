import { gql } from "graphql-request";

export const doesRepositoryExistQuery = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      isArchived
    }
  }
`;

export const doesRepositoryExistVariables = (name: string, owner: string) => ({
  name,
  owner
});

export interface DoesRepositoryExist {
  repository: {
    isArchived: boolean;
  };
}
