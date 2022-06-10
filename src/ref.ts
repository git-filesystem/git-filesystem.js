// Branches

const fqBranchRefPrefix = "refs/heads/";
export type FullyQualifiedBranchRef = `${typeof fqBranchRefPrefix}${string}`;

export interface FullyQualifiedBranch {
  refType: "branch";
  owner: string;
  repositoryName: string;
  ref: FullyQualifiedBranchRef;
}

export const isFullyQualifiedBranchRef = (ref: string): ref is FullyQualifiedTagRef =>
  ref.startsWith(fqBranchRefPrefix) && ref.length > fqBranchRefPrefix.length;

// Tags

const fqTagRefPrefix = "refs/tags/";
export type FullyQualifiedTagRef = `${typeof fqTagRefPrefix}${string}`;

export interface FullyQualifiedTag {
  refType: "tag";
  owner: string;
  repositoryName: string;
  ref: FullyQualifiedTagRef;
}

export const isFullyQualifiedTagRef = (ref: string): ref is FullyQualifiedTagRef =>
  ref.startsWith(fqTagRefPrefix) && ref.length > fqTagRefPrefix.length;

// All

export type FullyQualifiedRef = FullyQualifiedBranch | FullyQualifiedTag;
