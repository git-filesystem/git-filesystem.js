export { Client } from "./lib/client";
export type { GitUser, Provider, RepositoryExistence } from "./lib/client";
export { CommitBuilder, defaultJsonConfig } from "./lib/commit-builder";
export type { JsonConfig } from "./lib/commit-builder";
export {
  createFullyQualifiedBranch,
  createFullyQualifiedTag,
  fqBranchRefPrefix,
  fqTagRefPrefix,
  isFullyQualifiedBranchRef,
  isFullyQualifiedTagRef,
  refNameWithoutPrefix
} from "./lib/ref";
export type {
  FullyQualifiedBranch,
  FullyQualifiedBranchRef,
  FullyQualifiedRef,
  FullyQualifiedTag,
  FullyQualifiedTagRef
} from "./lib/ref";
export type { ReadonlyRepository, Repository } from "./lib/repository";
export { RestClient } from "./lib/rest-client";
export { FileNotFoundError } from "./lib/errors/file-not-found";
export { AlreadyCommittedError } from "./lib/errors/already-committed";
export { CommitError } from "./lib/errors/commit-error";
export { RepositoryAlreadyExistsError } from "./lib/errors/repository-already-exists";
export { EmptyCommitError } from "./lib/errors/empty-commit";
export { MultipleFileActionsError } from "./lib/errors/multiple-file-actions";
