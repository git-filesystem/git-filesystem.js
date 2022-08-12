import { getClient } from "./sdk/gql-client";

/*

This file isn't very useful as it can't yet search by file content :/

*/

export const searchByFilePath = async (
  accessToken: string,
  filePath: string
): Promise<string[]> => {
  const response = await getClient(accessToken).searchByFilePath({
    filePath
  });

  const repositoryNames =
    response.projects?.nodes
      ?.filter(n => !!n?.repository?.tree?.lastCommit?.shortId && !!n.fullPath)
      .map(n => n?.fullPath)
      .filter(isString) ?? [];

  return repositoryNames;
};

const isString = (input: unknown): input is string => typeof input === "string";
