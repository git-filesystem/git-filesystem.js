import axios from "axios";

export const getRestClient = (accessToken: string) =>
  axios.create({
    baseURL: "https://api.github.com",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
      Authorization: "token " + accessToken
    },
    transformResponse: res => res
  });
