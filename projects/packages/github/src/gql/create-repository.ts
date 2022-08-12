import { getIdForUserOrOrg } from "./get-id-for-user-or-org";
import { getClient } from "./sdk/gql-client";

export const createRepository = async (
  accessToken: string,
  name: string,
  owner: string,
  isPrivate = true,
  description: string | undefined
): Promise<void> => {
  const ownerId = await getIdForUserOrOrg(accessToken, owner);

  await getClient(accessToken).createRepository({
    input: {
      name,
      visibility: isPrivate ? "PRIVATE" : "PUBLIC",
      description: description ?? "",
      ownerId
    }
  });
};
