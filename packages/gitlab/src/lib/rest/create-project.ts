import { RepositoryAlreadyExistsError } from "@git-filesystem/abstractions";
import { AxiosError } from "axios";
import { getRestClient } from "./rest-client";

interface Body {
  path: string;
  visibility: "public" | "private";
  description: string;
  namespace_id: number;
}

interface Response {
  path_with_namespace: string;
}

export const createProject = async (
  accessToken: string,
  namespaceId: number,
  name: string,
  description: string,
  isPrivate = true
) => {
  const requestBody: Body = {
    path: name,
    visibility: isPrivate ? "private" : "public",
    description,
    namespace_id: namespaceId
  };

  try {
    const { data } = await getRestClient(accessToken).post<Body, Response>("projects", requestBody);

    return data.path_with_namespace;
  } catch (e) {
    if (e instanceof AxiosError && Array.isArray(e.response?.data.message.name)) {
      const messages = e.response?.data.message.name as Array<unknown>;

      if (messages.find(m => m === "has already been taken")) {
        throw new RepositoryAlreadyExistsError(name);
      }
    }

    throw e;
  }
};
