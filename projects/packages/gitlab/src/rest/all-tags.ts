import { FullyQualifiedTagRef } from "@gitbuckets/abstractions";
import { urlEncode } from "@gitbuckets/utils";
import { getRestClient } from "./rest-client";

interface Response {
  name: string;
}

export const allTags = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<FullyQualifiedTagRef[]> => {
  const urlEncodedRepoPath = urlEncode(owner + "/" + name);
  const path = `projects/${urlEncodedRepoPath}/repository/tags`;

  const { data } = await getRestClient(accessToken).get<Response[]>(path);

  return data.map<FullyQualifiedTagRef>(d => `refs/tags/${d.name}`);
};
