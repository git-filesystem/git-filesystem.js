export { Client } from "./client";
export type { GitUser, Provider, RepositoryExistence } from "./client";
export {
  createFullyQualifiedBranch,
  createFullyQualifiedTag,
  fqBranchRefPrefix,
  fqTagRefPrefix,
  isFullyQualifiedBranchRef,
  isFullyQualifiedTagRef,
  refNameWithoutPrefix
} from "./ref";
export type {
  FullyQualifiedBranch,
  FullyQualifiedBranchRef,
  FullyQualifiedRef,
  FullyQualifiedTag,
  FullyQualifiedTagRef
} from "./ref";
export { defaultJsonConfig, Repository } from "./repository";
export type { JsonConfig, ReadonlyRepository } from "./repository";
export { RestClient } from "./rest-client";
