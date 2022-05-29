import { Provider } from "../src/client";
import { ClientFactory } from "../src/client-factory";
import { GitHubClient } from "../src/github/github-client";

const invalidProviderNames = ["", "GITHUB", "git", undefined, null, 0] as unknown as Provider[];

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
      }).toThrowError(`No provider found for the value '${invalidProviderName}'`);
    })
  );
});
