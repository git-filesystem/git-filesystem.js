import { getRestClient } from "./rest-client";

export const deleteTag = async (
  accessToken: string,
  owner: string,
  repositoryName: string,
  tagName: string
): Promise<void> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags/${tagName}`;

  await getRestClient(accessToken).delete(path);
};
