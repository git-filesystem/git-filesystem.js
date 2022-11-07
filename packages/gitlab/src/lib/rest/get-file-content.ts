import {
  FileNotFoundError,
  FullyQualifiedBranchRef,
  FullyQualifiedRef,
  FullyQualifiedTagRef
} from "@git-filesystem/abstractions";
import { urlEncode } from "@git-filesystem/utils";
import { AxiosError } from "axios";
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

  try {
    const result = await getRestClient(accessToken, false).get<Params, string>(path, params);
    return result.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.status === 404) {
      throw new FileNotFoundError(filePath);
    }

    throw e;
  }
};
