import { FullyQualifiedRef } from "@git-filesystem/abstractions";
import { urlEncode } from "@git-filesystem/utils";
import { getRestClient } from "./rest-client";

type RequestResponse = Item[];

export interface Item {
  name: string;
  type: "tree" | "blob";
}

export const getItemsInDir = async (
  accessToken: string,
  directory: string,
  branch: FullyQualifiedRef
): Promise<Item[]> => {
  const { owner, repositoryName, ref } = branch;
  const urlEncodedRepoPath = urlEncode(owner + "/" + repositoryName);

  const path = `projects/${urlEncodedRepoPath}/repository/tree?path=${directory}&ref=${ref}`;

  const result = await getRestClient(accessToken).get<RequestResponse>(path);

  return result.data;
};
