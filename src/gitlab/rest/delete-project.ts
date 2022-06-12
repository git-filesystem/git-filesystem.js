import { AxiosResponse } from "axios";
import { urlEncode } from "../../utils/url-encode";
import { getRestClient } from "./rest-client";

interface Response {
  message: string;
}

export const deleteProject = async (accessToken: string, owner: string, name: string) => {
  const urlEncodedPath = urlEncode(owner + "/" + name);

  await getRestClient(accessToken).delete<Response, AxiosResponse<Response>>(
    "projects/" + urlEncodedPath
  );
};
