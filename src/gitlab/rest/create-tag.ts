import { AxiosResponse } from "axios";
import { FullyQualifiedBranch, FullyQualifiedTagRef } from "../../ref";
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
  const { owner, repositoryName, ref } = branch;
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const params: Params = {
    tag_name: tagName,
    ref
  };

  const { data } = await getRestClient(accessToken).post<Response[], AxiosResponse<Response>, null>(
    path,
    null,
    { params }
  );

  return `refs/tags/${data.name}`;
};
