import { AxiosResponse } from "axios";
import { getRestClient } from "./rest-client";

interface RequestResponse {
  message: string;
}

export const deleteProject = async (accessToken: string, owner: string, name: string) => {
  const urlEncodedPath = encodeURIComponent(owner + "/" + name);

  await getRestClient(accessToken).delete<RequestResponse, AxiosResponse<RequestResponse>>(
    "projects/" + urlEncodedPath
  );
};
