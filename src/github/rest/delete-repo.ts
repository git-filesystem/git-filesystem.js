import { getRestClient } from "./rest-client";

export const deleteRepo = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<void> => {
  const path = `repos/${owner}/${name}`;
  await getRestClient(accessToken).delete(path);
};
