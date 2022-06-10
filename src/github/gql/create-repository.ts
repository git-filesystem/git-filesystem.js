import { gql } from "graphql-request";
import { getIdForUserOrOrg } from "./get-id-for-user-or-org";
import { getClient } from "./gql-client";

const createRepositoryMutation = gql`
  mutation ($input: CreateRepositoryInput!) {
    createRepository(input: $input) {
      clientMutationId
    }
  }
`;

interface CreateRepositoryVariables {
  input: {
    name: string;
    ownerId: string;
    visibility: "PRIVATE" | "PUBLIC";
    description: string;
  };
}

export interface CreateRepositoryResponse {
  createRepository: {
    clientMutationId: null;
  };
}

export const createRepository = async (
  accessToken: string,
  name: string,
  owner: string,
  isPrivate = true,
  description: string | undefined
) => {
  const ownerId = await getIdForUserOrOrg(accessToken, owner);

  const variables: CreateRepositoryVariables = {
    input: {
      name,
      visibility: isPrivate ? "PRIVATE" : "PUBLIC",
      description: description ?? "",
      ownerId
    }
  };

  await getClient(accessToken).request<CreateRepositoryResponse, CreateRepositoryVariables>(
    createRepositoryMutation,
    variables
  );
};
