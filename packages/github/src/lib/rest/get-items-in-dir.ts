import { FullyQualifiedRef } from "@git-filesystem/abstractions";
import { getRestClient } from "./rest-client";

type RequestResponse = Item[];

export interface Item {
  name: string;
  type: "dir" | "file";
}

export const getItemsInDir = async (
  accessToken: string,
  directory: string,
  branch: FullyQualifiedRef
): Promise<Item[]> => {
  const { owner, repositoryName, ref } = branch;
  const path = `repos/${owner}/${repositoryName}/contents/${directory}?ref=${ref}`;

  const result = await getRestClient(accessToken).get<RequestResponse>(path);

  return result.data;
};
