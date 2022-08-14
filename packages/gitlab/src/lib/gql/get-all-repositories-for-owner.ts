import { getClient } from "./sdk/gql-client";

export const getAllRepositoriesForOwner = async (
  accessToken: string,
  owner: string
): Promise<string[]> => {
  const response = await getClient(accessToken).getAllRepositoriesForOwner({
    login: owner
  });

  return response.namespace?.projects.nodes?.map(node => node?.fullPath).filter(isString) ?? [];
};

const isString = (input: unknown): input is string => typeof input === "string";
