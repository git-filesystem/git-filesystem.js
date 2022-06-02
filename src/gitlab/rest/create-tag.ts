import { AxiosResponse } from "axios";
import { getRestClient } from "./rest-client";

interface TagResponse {
  name: string;
  target: string;
}

export const createTag = async (
  accessToken: string,
  owner: string,
  repositoryName: string,
  tagName: string,
  branchName: string
): Promise<TagResponse> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const params = {
    tag_name: tagName,
    ref: branchName
  };

  const { data } = await getRestClient(accessToken).get<TagResponse[], AxiosResponse<TagResponse>>(
    path,
    { params }
  );

  return data;
};
