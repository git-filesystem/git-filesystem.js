import axios from "axios";

export const getRestClient = (accessToken: string, stopResponseTransformation = false) =>
  axios.create({
    baseURL: "https://gitlab.com/api/v4/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "PRIVATE-TOKEN": accessToken
    },
    transformResponse: stopResponseTransformation ? res => res : undefined
  });
