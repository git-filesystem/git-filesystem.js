import { getClient } from "./sdk/gql-client";

export const isRepositoryArchived = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<boolean> => {
  const response = await getClient(accessToken).isRepositoryArchived({
    name,
    owner
  });

  if (!response.repository) {
    throw new Error(`Cannot find repository "${owner}/${name}"`);
  }

  return response.repository.isArchived;
};
