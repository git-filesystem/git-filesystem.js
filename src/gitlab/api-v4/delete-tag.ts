import { getApi4Client } from "./api-client";

export const deleteTag = async (
  accessToken: string,
  owner: string,
  repositoryName: string,
  tagName: string
): Promise<void> => {
  const urlEncodedRepoPath = encodeURIComponent(owner + "/" + repositoryName);
  const path = `projects/${urlEncodedRepoPath}/repository/tags/${tagName}`;

  await getApi4Client(accessToken).delete(path);
};
