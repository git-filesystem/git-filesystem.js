# @git-filesystem/gitlab

This package contains the GitLab implementation used by the [git-filesystem](https://github.com/git-filesystem/git-filesystem.js) npm package.

Use this to read & write specifically to GitLab repositories only; else use the [git-filesystem](https://github.com/git-filesystem/git-filesystem.js) package to write to repositories hosted with multiple cloud providers.

This package exposes methods for:

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
npm install @git-filesystem/gitlab
```

## Example Usage

```ts
import { GitLabClient } from "@git-filesystem/gitlab"

const gitHubClient = new GitLabClient("gitlab-username", "access-token", "user-agent-name");

const gitHubRepository = gitHubClient.getRepository("repository-name");

let fileContent = await gitHubRepository.readFile("file/path.txt");
fileContent += "\n\nNewData";

await gitHubRepository.updateFile("file/path.txt", fileContent);
```

## License

@git-filesystem/gitlab is licensed under the [ISC License](./LICENSE.md).
