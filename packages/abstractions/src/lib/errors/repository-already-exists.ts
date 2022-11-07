export class RepositoryAlreadyExistsError extends Error {
  constructor(repoName: string) {
    super(`Repository ${repoName} already exists`);
  }
}
