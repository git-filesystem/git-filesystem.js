export const getDirectoryParts = (path: string): string[] => {
  const pathParts = path.split("\\").join("/").split("/");

  const lastPart = pathParts[pathParts.length - 1];
  if (lastPart === "" || lastPart.includes(".")) {
    pathParts.pop();
  }

  if (pathParts.length === 0) {
    return [];
  }

  const firstPart = pathParts[0];
  if (firstPart === "" || firstPart.includes(":")) {
    pathParts.shift();
  }

  return pathParts;
};
