import { AxiosResponse } from "axios";
import { getRestClient } from "./rest-client";

interface RequestBody {
  path: string;
  visibility: "public" | "private";
  description: string;
  namespace_id: number;
}

interface RequestResponse {
  path_with_namespace: string;
}

export const createProject = async (
  accessToken: string,
  namespaceId: number,
  name: string,
  description: string,
  isPrivate = true
) => {
  const requestBody: RequestBody = {
    path: name,
    visibility: isPrivate ? "private" : "public",
    description,
    namespace_id: namespaceId
  };

  const { data } = await getRestClient(accessToken).post<
    RequestResponse,
    AxiosResponse<RequestResponse>,
    RequestBody
  >("projects", requestBody);

  return data.path_with_namespace;
};
