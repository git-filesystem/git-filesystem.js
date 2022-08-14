import {
  FullyQualifiedBranchRef,
  FullyQualifiedRef,
  FullyQualifiedTagRef
} from "@gitbuckets/abstractions";
import { urlEncode } from "@gitbuckets/utils";
import { getRestClient } from "./rest-client";

interface Params {
  ref: FullyQualifiedBranchRef | FullyQualifiedTagRef;
}

export const getFileContent = async (
  accessToken: string,
  fqRef: FullyQualifiedRef,
  filePath: string
): Promise<string> => {
  const { owner, repositoryName, ref } = fqRef;

  const projectFullPath = `${owner}/${repositoryName}`;

  const urlEncodedProjectFullPath = urlEncode(projectFullPath);
  const urlEncodedFilePath = urlEncode(filePath);

  const path = `projects/${urlEncodedProjectFullPath}/repository/files/${urlEncodedFilePath}/raw`;

  const params: Params = { ref };

  const result = await getRestClient(accessToken, false).get<Params, string>(path, params);

  return result.data;
};
