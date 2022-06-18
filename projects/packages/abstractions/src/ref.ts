// Branches

export const fqBranchRefPrefix = "refs/heads/";
export type FullyQualifiedBranchRef = `${typeof fqBranchRefPrefix}${string}`;

export interface FullyQualifiedBranch {
  refType: "branch";
  owner: string;
  repositoryName: string;
  ref: FullyQualifiedBranchRef;
}

export const isFullyQualifiedBranchRef = (ref: string): ref is FullyQualifiedBranchRef =>
  ref.startsWith(fqBranchRefPrefix) && ref.length > fqBranchRefPrefix.length;

export const createFullyQualifiedBranch = (
  owner: string,
  repositoryName: string,
  branchName: string
): FullyQualifiedBranch => {
  const fqBranchRef: FullyQualifiedBranchRef = isFullyQualifiedBranchRef(branchName)
    ? branchName
    : `${fqBranchRefPrefix}${branchName}`;

  return {
    refType: "branch",
    owner,
    repositoryName,
    ref: fqBranchRef
  };
};

// Tags

export const fqTagRefPrefix = "refs/tags/";
export type FullyQualifiedTagRef = `${typeof fqTagRefPrefix}${string}`;

export interface FullyQualifiedTag {
  refType: "tag";
  owner: string;
  repositoryName: string;
  ref: FullyQualifiedTagRef;
}

export const isFullyQualifiedTagRef = (ref: string): ref is FullyQualifiedTagRef =>
  ref.startsWith(fqTagRefPrefix) && ref.length > fqTagRefPrefix.length;

export const createFullyQualifiedTag = (
  owner: string,
  repositoryName: string,
  tagName: string
): FullyQualifiedTag => {
  const fqTagRef: FullyQualifiedTagRef = isFullyQualifiedTagRef(tagName)
    ? tagName
    : `${fqTagRefPrefix}${tagName}`;

  return {
    refType: "tag",
    owner,
    repositoryName,
    ref: fqTagRef
  };
};

// All

export type FullyQualifiedRef = FullyQualifiedBranch | FullyQualifiedTag;

export const refNameWithoutPrefix = (
  ref: FullyQualifiedBranchRef | FullyQualifiedTagRef
): string => {
  if (isFullyQualifiedBranchRef(ref)) {
    return ref.substring(fqBranchRefPrefix.length);
  }

  if (isFullyQualifiedTagRef(ref)) {
    return ref.substring(fqTagRefPrefix.length);
  }

  throw new Error(`Invalid ref: ${ref}`);
};
