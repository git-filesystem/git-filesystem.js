import { FullyQualifiedBranch, FullyQualifiedTagRef } from "@git-filesystem/abstractions";
import { urlEncode } from "@git-filesystem/utils";
import { getRestClient } from "./rest-client";

interface Params {
  tag_name: string;
  ref: string;
}

interface Response {
  name: string;
}

export const createTag = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  tagName: string
): Promise<FullyQualifiedTagRef> => {
  if (tagName.startsWith("refs/tags/")) {
    tagName = tagName.replace("refs/tags/", "");
  }

  const { owner, repositoryName, ref } = branch;
  const urlEncodedRepoPath = urlEncode(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const params: Params = {
    tag_name: tagName,
    ref
  };

  const { data } = await getRestClient(accessToken).post<Params, null, Response>(
    path,
    null,
    params
  );

  return `refs/tags/${data.name}`;
};
