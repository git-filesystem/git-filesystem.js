# git-filesystem

A shared abstraction for cloud Git providers exposing a file-system-like API. Use this to read & write to repositories like they're file systems.

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
npm install git-filesystem
```

## Example Usage

```ts
import { ClientFactory } from "git-filesystem";

const gitHubClient = new ClientFactory().getClientForProvider(
  "github",
  "github-username",
  "access-token",
  "user-agent-name"
);
// or
const gitLabClient = new ClientFactory().getClientForProvider(
  "gitlab",
  "gitlab-username",
  "access-token",
  "user-agent-name"
);
// or
const bitBucketClient = new ClientFactory().getClientForProvider(
  "bitbucket",
  "bitbucket-username",
  "access-token",
  "user-agent-name"
);

// and then

const gitHubRepository = gitHubClient.getRepository("repository-name");

let fileContent = await gitHubRepository.readFile("file/path.txt");
fileContent += "\n\nNewData";

await gitHubRepository.updateFile("file/path.txt", fileContent);
```

## License

git-filesystem is licensed under the [ISC License](./LICENSE.md).
