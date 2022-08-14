import { Provider } from "@gitbuckets/abstractions";
import { GitHubClient } from "@gitbuckets/github";
import { GitLabClient } from "@gitbuckets/gitlab";
import { ClientFactory } from "../src/lib/client-factory";

const invalidProviderNames = [
  "",
  "GITHUB",
  "GITLAB",
  "git",
  undefined,
  null,
  0
] as unknown as Provider[];

describe("client-factory", () => {
  describe("github", () => {
    it("should return a GitHubClient when given 'github'", () => {
      const clientFactory = new ClientFactory();
      const client = clientFactory.getClientForProvider(
        "github",
        "any owner",
        "any token",
        "any applicationName"
      );

      expect(client.provider).toBe("github");
      expect(client).toBeInstanceOf(GitHubClient);
    });
  });

  describe("gitlab", () => {
    it("should return a GitLabClient when given 'gitlab'", () => {
      const clientFactory = new ClientFactory();
      const client = clientFactory.getClientForProvider(
        "gitlab",
        "any owner",
        "any token",
        "any applicationName"
      );

      expect(client.provider).toBe("gitlab");
      expect(client).toBeInstanceOf(GitLabClient);
    });
  });

  invalidProviderNames.forEach(invalidProviderName =>
    it(`should throw when given an invalid provider name (${invalidProviderName})`, () => {
      const clientFactory = new ClientFactory();

      expect(() => {
        clientFactory.getClientForProvider(
          invalidProviderName,
          "any owner",
          "any token",
          "any applicationName"
        );
      }).toThrow(`No provider found for the value '${invalidProviderName}'`);
    })
  );
});
