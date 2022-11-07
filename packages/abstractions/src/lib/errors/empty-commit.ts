export class EmptyCommitError extends Error {
  constructor() {
    super(
      "Cannot create an empty commit. You need to either create, update, or delete at least one file"
    );
  }
}
