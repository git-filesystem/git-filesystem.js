import { getClient } from "./sdk/gql-client";

export const deleteTag = async (accessToken: string, tagId: string): Promise<void> => {
  await getClient(accessToken).deleteTag({
    tag: tagId
  });
};
