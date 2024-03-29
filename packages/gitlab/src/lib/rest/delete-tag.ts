import { urlEncode } from "@git-filesystem/utils";
import { getRestClient } from "./rest-client";

export const deleteTag = async (
  accessToken: string,
  owner: string,
  repositoryName: string,
  tagName: string
): Promise<void> => {
  if (tagName.startsWith("refs/tags/")) {
    tagName = tagName.replace("refs/tags/", "");
  }

  const urlEncodedRepoPath = urlEncode(owner + "/" + repositoryName);
  const urlEncodedTagName = urlEncode(tagName);

  const path = `projects/${urlEncodedRepoPath}/repository/tags/${urlEncodedTagName}`;

  await getRestClient(accessToken).delete(path);
};
