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
export { createFileNotFoundError } from "./lib/errors/file-not-found";
