import { AxiosResponse } from "axios";
import { FullyQualifiedTagRef } from "../../ref";
import { getRestClient } from "./rest-client";

interface Response {
  name: string;
}

export const createTag = async (
  accessToken: string,
  owner: string,
  repositoryName: string,
  tagName: string,
  branchName: string
): Promise<FullyQualifiedTagRef> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const params = {
    tag_name: tagName,
    ref: branchName
  };

  const { data } = await getRestClient(accessToken).get<Response[], AxiosResponse<Response>>(path, {
    params
  });

  return `refs/tags/${data.name}`;
};
