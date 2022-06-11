import { AxiosResponse } from "axios";
import { FullyQualifiedTagRef } from "../../ref";
import { getRestClient } from "./rest-client";

interface TagResponse {
  name: string;
}

export const allTags = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<FullyQualifiedTagRef[]> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + name);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const { data } = await getRestClient(accessToken).get<
    TagResponse[],
    AxiosResponse<TagResponse[]>
  >(path);

  return data.map<FullyQualifiedTagRef>(d => `refs/tags/${d.name}`);
};
