import { AxiosResponse } from "axios";
import { getApi4Client } from "./api-client";

interface TagResponse {
  name: string;
  target: string;
}

export const allTags = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<TagResponse[]> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + name);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const { data } = await getApi4Client(accessToken).get<
    TagResponse[],
    AxiosResponse<TagResponse[]>
  >(path);

  return data;
};
