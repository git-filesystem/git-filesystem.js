### Running End-2-End |Tests Locally

The End-2-End tests require access to GitHub, GitLab, and BitBucket accounts.
If you don't have access to accounts that can be used for testing, then you can't run them locally.

If you do have accounts, to set them up, make a file called `.jest.env` next to this README with the following content:

```ini
E2E_GITHUB_USERNAME=<username>
E2E_GITHUB_PAT=<personal access token>
E2E_GITLAB_USERNAME=<username>
E2E_GITLAB_PAT=<personal access token>
E2E_BITBUCKET_USERNAME=<username>
E2E_BITBUCKET_PAT=<personal access token>
```

Then run:

```bash
npx nx run git-filesystem-e2e:e2e-test
```
