import { AxiosResponse } from "axios";
import { getApi4Client } from "./api-client";

interface RequestBody {
  path: string;
  visibility: "public" | "private";
  description: string;
}

interface RequestResponse {
  path_with_namespace: string;
}

export const createProject = async (
  accessToken: string,
  name: string,
  isPrivate = true,
  description: string
) => {
  const { data } = await getApi4Client(accessToken).post<
    RequestResponse,
    AxiosResponse<RequestResponse>,
    RequestBody
  >("projects", {
    path: name,
    visibility: isPrivate ? "private" : "public",
    description
  });

  return data.path_with_namespace;
};
