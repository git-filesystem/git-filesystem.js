import { getClient } from "./sdk/gql-client";

export const getAllRepositories = async (accessToken: string): Promise<string[]> => {
  const response = await getClient(accessToken).getAllRepositories();

  return (
    response.projects?.nodes
      ?.map(node => (node?.namespace ? `${node.namespace.path}/${node.name}` : null))
      .filter(isString) ?? []
  );
};

const isString = (input: unknown): input is string => typeof input === "string";
