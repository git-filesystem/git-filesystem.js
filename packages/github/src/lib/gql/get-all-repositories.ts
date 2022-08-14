import { getClient } from "./sdk/gql-client";

export const getAllRepositories = async (accessToken: string): Promise<string[]> => {
  const response = await getClient(accessToken).getAllRepositories();

  return (
    response.viewer.repositories.nodes?.map(repo => repo?.nameWithOwner).filter(isAString) ?? []
  );
};

const isAString = (input: unknown): input is string => typeof input === "string";
