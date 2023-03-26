import { FullyQualifiedRef } from "@git-filesystem/abstractions";
import { getItemsInDir, Item } from "./get-items-in-dir";

export const getDirsInDir = async (
  accessToken: string,
  directory: string,
  branch: FullyQualifiedRef
): Promise<Item[]> => {
  const items = await getItemsInDir(accessToken, directory, branch);

  return items.filter(item => item.type === "dir");
};
