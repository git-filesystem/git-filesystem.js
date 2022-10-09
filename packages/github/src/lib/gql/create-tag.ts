import { FullyQualifiedBranch, FullyQualifiedTagRef } from "@git-filesystem/abstractions";
import { getBranchShaAndRepoId } from "./get-branch-sha-and-repo-id";
import { getClient } from "./sdk/gql-client";

export const createTag = async (
  accessToken: string,
  fqBranch: FullyQualifiedBranch,
  ref: FullyQualifiedTagRef
): Promise<void> => {
  const { repoId, branchSha } = await getBranchShaAndRepoId(accessToken, fqBranch);

  await getClient(accessToken).createTag({
    repoId,
    name: ref,
    sha: branchSha
  });
};
