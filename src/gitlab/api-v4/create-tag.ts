import { AxiosResponse } from "axios";
import { getApi4Client } from "./api-client";

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

  const { data } = await getApi4Client(accessToken).get<TagResponse[], AxiosResponse<TagResponse>>(
    path,
    { params }
  );

  return data;
};
