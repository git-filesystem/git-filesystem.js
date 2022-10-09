import { FullyQualifiedTag } from "@git-filesystem/abstractions";
import { getClient } from "./sdk/gql-client";

export const getRefIdForTag = async (
  accessToken: string,
  fqTag: FullyQualifiedTag
): Promise<string> => {
  const { owner, repositoryName, ref } = fqTag;

  const response = await getClient(accessToken).getRefIdForTag({
    owner,
    repo: repositoryName,
    tag: ref
  });

  const refId = response.repository?.ref?.id;

  if (!refId) {
    throw new Error(`Tag ${ref} not found`);
  }

  return refId;
};
