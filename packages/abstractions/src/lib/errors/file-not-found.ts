export class FileNotFoundError extends Error {
  constructor(filePath: string) {
    super(`File ${filePath} not found`);
  }
}
