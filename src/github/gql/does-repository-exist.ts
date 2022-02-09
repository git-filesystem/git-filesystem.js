export const doesRepositoryExistQuery = `
query ($name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
    isArchived
  }
}`;

export const doesRepositoryExistVariables = (name: string, owner: string) => ({
  name: name,
  owner: owner
});

export interface DoesRepositoryExist {
  repository: {
    isArchived: boolean;
  };
}
