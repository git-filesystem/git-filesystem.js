import { AxiosResponse } from "axios";
import { getApi4Client } from "./api-client";

interface RequestResponse {
  message: string;
}

export const deleteProject = async (accessToken: string, owner: string, name: string) => {
  const urlEncodedPath = encodeURIComponent(owner + "/" + name);

  await getApi4Client(accessToken).delete<RequestResponse, AxiosResponse<RequestResponse>>(
    "projects/" + urlEncodedPath
  );
};
