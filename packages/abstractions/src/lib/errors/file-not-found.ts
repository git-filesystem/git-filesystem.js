export const createFileNotFoundError = (filePath: string) =>
  new Error(`File ${filePath} not found`);
