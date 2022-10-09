import { FullyQualifiedRef } from "@git-filesystem/abstractions";
import { getClient } from "./sdk/gql-client";

export const getFileContent = async (
  accessToken: string,
  fqRef: FullyQualifiedRef,
  path: string
): Promise<string> => {
  const { owner, repositoryName, ref } = fqRef;

  const response = await getClient(accessToken).getFileContent({
    owner,
    repositoryName,
    expression: `${ref}:${path}`
  });

  if (
    !!response.repository?.object &&
    "text" in response.repository.object &&
    typeof response.repository.object.text === "string"
  ) {
    return response.repository.object.text;
  }

  throw new Error(`File ${path} not found`);
};
