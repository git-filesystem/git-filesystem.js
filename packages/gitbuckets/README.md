# git-buckets.js

A shared abstraction for cloud Git providers exposing a file-system-like API.

Supports:

- GitHub 🚧
- GitLab 🚧
- BitBucket 🚧

Exposes methods for:

- Creating a repository
- Deleting a repository
- Searching for repositories

- Creating a file
- Overwriting a file
- Deleting a file

- Creating tags
- Reading files from tags

## Installation

```bash
npm install git-buckets
```

## Building Locally

```bash
npm run build
```

## Running Tests Locally

### Unit

```bash
npm run test
```

### End-to-end

The End-2-End tests require access to GitHub, GitLab, and BitBucket accounts.
If you don't have access to accounts that can be used for testing, then you can't run them locally.

To set them up, make a file called `.jest.env` in the root of the project with the following:

```ini
E2E_GITHUB_USERNAME=<username>
E2E_GITHUB_PAT=<personal access token>

E2E_GITLAB_USERNAME=<username>
E2E_GITLAB_PAT=<personal access token>

BITBUCKET_USERNAME=<username>
BITBUCKET_PAT=<personal access token>
```

Then run:

```bash
npm run test:e2e
```

## License

Git-buckets is licensed under the [ISC License](./LICENSE.md).
