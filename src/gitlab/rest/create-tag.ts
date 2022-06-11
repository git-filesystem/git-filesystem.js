import { AxiosResponse } from "axios";
import { FullyQualifiedBranch, FullyQualifiedTagRef } from "../../ref";
import { getRestClient } from "./rest-client";

interface Response {
  name: string;
}

export const createTag = async (
  accessToken: string,
  branch: FullyQualifiedBranch,
  tagName: string
): Promise<FullyQualifiedTagRef> => {
  const { owner, repositoryName, ref } = branch;
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const params = {
    tag_name: tagName,
    ref
  };

  const { data } = await getRestClient(accessToken).get<Response[], AxiosResponse<Response>>(path, {
    params
  });

  return `refs/tags/${data.name}`;
};
