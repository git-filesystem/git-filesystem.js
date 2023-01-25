import { FullyQualifiedBranch } from "@git-filesystem/abstractions";
import { getClient } from "./sdk/gql-client";

export const getBranchSha = async (
  accessToken: string,
  fqBranch: FullyQualifiedBranch
): Promise<string | undefined> => {
  const { owner, repositoryName, ref } = fqBranch;

  const result = await getClient(accessToken).getBranchSha({
    owner,
    name: repositoryName,
    branch: ref
  });

  const branchSha = result.repository?.ref?.target?.oid;

  return branchSha ?? undefined;
};
