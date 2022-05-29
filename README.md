# git-buckets.js

A shared abstraction for cloud Git providers exposing a file-system-like API.

Supports:

- GitHub ✅
- GitLab 🚧
- BitBucket 🚧

Exposes methods for:

- Creating a repository
- Deleting a repository
- Searching for repositories

- Creating a file
- Overwriting a file
- Deleting a file

- Creating read-only snapshots (tags)
- Reading files from snapshots (tags)

## Installation

```bash
npm install git-buckets
```

## Building Locally

```bash
npm run build
```

## License

Git-buckets is licensed under the [ISC License](./LICENSE.md).
