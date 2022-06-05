import { Client, GitUser, Provider as ProviderName } from "../src/client";
import { ClientFactory } from "../src/client-factory";

/*

  Test order matters!

 */

interface Provider {
  name: ProviderName;
  user: string | undefined;
  accessToken: string | undefined;
}

const providers: Provider[] = [
  { name: "github", user: process.env.GITHUB_USERNAME, accessToken: process.env.GITHUB_PAT }
];

providers.forEach(provider =>
  describe(`${provider.name}, user ${provider.user}`, () => {
    let accessToken: string;
    let userAccount: string;
    let repositoryName: string;
    let repositoryNameWithOwner: string;

    let client: Client;

    beforeAll(() => {
      expect(provider.accessToken).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      accessToken = provider.accessToken!;

      expect(provider.user).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      userAccount = provider.user!;

      const currentMs = new Date().getUTCMilliseconds();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      repositoryName = `e2e-test-${currentMs}-${randomNumber}`;
      repositoryNameWithOwner = `${userAccount}/${repositoryName}`;
    });

    it(`should get the ${provider.name} client`, () => {
      const user: GitUser = {
        name: "gitbuckets-e2e",
        email: "gitbuckets.e2e@tobysmith.uk"
      };

      const factory = new ClientFactory();
      client = factory.getClientForProvider(
        provider.name,
        userAccount,
        accessToken,
        "CI",
        user,
        user
      );

      expect(client).toBeDefined();
      expect(client.provider).toBe(provider.name);
    });

    it("should be able to make a repository", async () => {
      const doesExistBefore = await client.doesRepositoryExist(repositoryName);
      expect(doesExistBefore).toBe("DoesNotExist");

      const repository = await client.createRepository(
        repositoryName,
        true,
        `Temporary repository for e2e test run ${repositoryName}`
      );

      expect(repository).toBeDefined();
      expect(repository.repositoryName).toBe(repositoryName);

      const doesExistAfter = await client.doesRepositoryExist(repositoryName);
      expect(doesExistAfter).toBe("Exists");
    });

    it("should be able to get all repositories for the current user", async () => {
      const repositories = await client.getAllRepositories();

      expect(repositories).toBeDefined();
      expect(repositories).toContain(repositoryNameWithOwner);
    });

    it("should be able to get all repositories for a different user", async () => {
      const repositories = await client.getAllRepositories("microsoft");

      expect(repositories).toBeDefined();
      expect(repositories).not.toContain(repositoryNameWithOwner);
    });

    it("should be able to delete a repository", async () => {
      const doesExistBefore = await client.doesRepositoryExist(repositoryName);
      expect(doesExistBefore).toBe("Exists");

      await client.deleteRepository(repositoryName);

      const doesExistAfter = await client.doesRepositoryExist(repositoryName);
      expect(doesExistAfter).toBe("DoesNotExist");
    });
  })
);
