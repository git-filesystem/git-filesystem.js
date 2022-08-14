import { getClient } from "./sdk/gql-client";

export const isRepositoryArchived = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<boolean> => {
  const fullPath = `${owner}/${name}`;

  const response = await getClient(accessToken).isRepositoryArchived({
    fullPath
  });

  if (response.project?.archived !== null && response.project?.archived !== undefined) {
    return response.project.archived;
  }

  throw new Error(`Cannot find ${fullPath}`);
};
