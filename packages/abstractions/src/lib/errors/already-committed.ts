export class AlreadyCommittedError extends Error {
  constructor() {
    super("This CommitBuilder has already been committed");
  }
}
