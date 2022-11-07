import { RepositoryAlreadyExistsError } from "@git-filesystem/abstractions";
import { ClientError } from "graphql-request";
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

  try {
    await getClient(accessToken).createRepository({
      input: {
        name,
        visibility: isPrivate ? "PRIVATE" : "PUBLIC",
        description: description ?? "",
        ownerId
      }
    });
  } catch (e) {
    if (
      e instanceof ClientError &&
      e.response.errors?.find(error => error.message === "Name already exists on this account")
    ) {
      throw new RepositoryAlreadyExistsError(name);
    }

    throw e;
  }
};
