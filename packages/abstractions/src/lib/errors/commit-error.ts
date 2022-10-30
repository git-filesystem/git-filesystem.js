export class CommitError extends Error {
  constructor(public readonly commitErrors: string[]) {
    super("Unable to create commit: " + commitErrors.join(", "));
  }
}
