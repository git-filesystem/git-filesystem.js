export const repositoryAlreadyExistsError = (name: string) =>
  new Error(`Repository ${name} already exists`);
