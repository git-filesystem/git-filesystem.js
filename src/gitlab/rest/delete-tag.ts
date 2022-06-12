import { getRestClient } from "./rest-client";

export const deleteTag = async (
  accessToken: string,
  owner: string,
  repositoryName: string,
  tagName: string
): Promise<void> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const urlEncodedTagName = encodeURIComponent(tagName);

  const path = `projects/${urlEncodedRepoPath}/repository/tags/${urlEncodedTagName}`;

  await getRestClient(accessToken).delete(path);
};
