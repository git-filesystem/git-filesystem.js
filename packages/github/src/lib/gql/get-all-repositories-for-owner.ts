import { getClient } from "./sdk/gql-client";

export const getAllRepositoriesForOwner = async (
  accessToken: string,
  owner: string
): Promise<string[]> => {
  const response = await getClient(accessToken).getAllRepositoriesForOwner({
    login: owner
  });

  if (response.repositoryOwner?.repositories?.nodes) {
    return response.repositoryOwner.repositories.nodes
      .map(repo => repo?.nameWithOwner)
      .filter<string>(isAString);
  }

  throw new Error(`Could not find repositories for owner ${owner}`);
};

const isAString = (input: unknown): input is string => typeof input === "string";
