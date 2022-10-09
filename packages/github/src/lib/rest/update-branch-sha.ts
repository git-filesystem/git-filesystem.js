import { FullyQualifiedBranch } from "@git-filesystem/abstractions";
import { getRestClient } from "./rest-client";

interface RequestBody {
  sha: string;
}

interface RequestResponse {
  object: {
    sha: string;
  };
}

export const updateBranchSha = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  sha: string
): Promise<string> => {
  const { owner, repositoryName, ref } = branch;

  const path = `repos/${owner}/${repositoryName}/git/${ref}`;

  const body: RequestBody = {
    sha
  };

  const { data } = await getRestClient(accessToken).patch<RequestBody, RequestResponse>(path, body);

  return data.object.sha;
};
