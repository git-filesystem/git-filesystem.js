import { OctokitOptions } from "@octokit/core/dist-types/types";

export const mockedGraphql = jest.fn();
export const mockedRest_search_code = jest.fn();
export const mockedRest_repos_delete = jest.fn();

export const Octokit = jest.fn();

export const setupOctokit = () => {
  Octokit.mockImplementation((options: OctokitOptions) => ({
    options,

    graphql: mockedGraphql,

    rest: {
      search: {
        code: mockedRest_search_code
      },

      repos: {
        delete: mockedRest_repos_delete
      }
    }
  }));
};
