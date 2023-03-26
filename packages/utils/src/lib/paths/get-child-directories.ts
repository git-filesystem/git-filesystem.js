import { getDirectoryParts } from "./get-directory-parts";

export const getChildDirectories = (targetDirectory: string, allFiles: string[]): string[] => {
  const targetDirectoryParts = getDirectoryParts(targetDirectory);

  const result = new Set<string>();

  for (const file of allFiles) {
    const fileParts = getDirectoryParts(file);

    if (fileParts.length <= targetDirectoryParts.length) {
      continue;
    }

    const isChild = targetDirectoryParts.every((part, index) => part === fileParts[index]);

    if (isChild) {
      result.add(fileParts[targetDirectoryParts.length]);
    }
  }

  return [...result];
};
