import { getDirectoryParts } from "./get-directory-parts";

export const getDirectory = (path: string): string => {
  const pathParts = getDirectoryParts(path);

  if (pathParts.length < 2) {
    return "/";
  }

  return pathParts.join("/");
};
