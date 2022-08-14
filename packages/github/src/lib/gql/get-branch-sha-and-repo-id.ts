import { FullyQualifiedBranch } from "@gitbuckets/abstractions";
import { getClient } from "./sdk/gql-client";

export interface Result {
  branchSha: string;
  repoId: string;
}

export const getBranchShaAndRepoId = async (
  accessToken: string,
  fqBranch: FullyQualifiedBranch
) => {
  const { owner, repositoryName, ref } = fqBranch;

  const result = await getClient(accessToken).getBranchShaAndRepoId({
    owner,
    name: repositoryName,
    branch: ref
  });

  const branchSha = result.repository?.ref?.target?.oid;
  const repoId = result.repository?.id;

  if (!branchSha || !repoId) {
    throw new Error(
      `Could not get branch sha or repo id for ${fqBranch.owner}/${fqBranch.repositoryName}/${fqBranch.ref}`
    );
  }

  return { branchSha, repoId };
};
