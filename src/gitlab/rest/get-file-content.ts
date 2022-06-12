import { AxiosResponse } from "axios";
import { FullyQualifiedRef } from "../../ref";
import { urlEncode } from "../../utils/url-encode";
import { getRestClient } from "./rest-client";

export const getFileContent = async (
  accessToken: string,
  fqRef: FullyQualifiedRef,
  filePath: string
): Promise<string> => {
  const { owner, repositoryName, ref } = fqRef;

  const projectFullPath = `${owner}/${repositoryName}`;

  const urlEncodedProjectFullPath = urlEncode(projectFullPath);
  const urlEncodedFilePath = urlEncode(filePath);

  const path = `projects/${urlEncodedProjectFullPath}/repository/files/${urlEncodedFilePath}/raw?ref=${ref}`;

  const result = await getRestClient(accessToken, true).get<string, AxiosResponse<string>, never>(
    path
  );
  return result.data;
};
