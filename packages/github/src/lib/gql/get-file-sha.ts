import { FullyQualifiedRef } from "@git-filesystem/abstractions";
import { getClient } from "./sdk/gql-client";

export const getFileSha = async (
  accessToken: string,
  fqRef: FullyQualifiedRef,
  path: string
): Promise<string> => {
  const { owner, repositoryName, ref } = fqRef;

  const response = await getClient(accessToken).getFileSha({
    owner,
    repositoryName,
    expression: `${ref}:${path}`
  });

  if (
    !!response.repository?.object &&
    "oid" in response.repository.object &&
    typeof response.repository.object.oid === "string"
  ) {
    return response.repository.object.oid;
  }

  throw new Error(`File ${path} not found`);
};
