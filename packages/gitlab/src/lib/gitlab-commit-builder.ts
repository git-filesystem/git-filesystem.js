import {
  CommitBuilder,
  AlreadyCommittedError,
  EmptyCommitError,
  MultipleFileActionsError,
  FileNotFoundError
} from "@git-filesystem/abstractions";
import { GitLabRepository } from "./gitlab-repository";
import { CommitAction, CommitActionType, createCommit } from "./gql/create-commit";

export class GitLabCommitBuilder extends CommitBuilder {
  private commitActions: CommitAction[] = [];
  private hasBeenCommitted = false;

  public constructor(private readonly repository: GitLabRepository) {
    super(repository.jsonConfig);
  }

  public createFile(path: string, content: string): void {
    this.ensureNotCommitted();

    const currentActionForPath = this.currentActionForPath(path);

    if (currentActionForPath) {
      throw new MultipleFileActionsError<CommitActionType>(
        path,
        currentActionForPath.action,
        "CREATE"
      );
    }

    const createAction: CommitAction = {
      action: "CREATE",
      content,
      filePath: path,
      encoding: "TEXT"
    };

    this.commitActions.push(createAction);
  }

  public updateFile(path: string, content: string): void {
    this.ensureNotCommitted();

    const currentActionForPath = this.currentActionForPath(path);

    if (currentActionForPath) {
      throw new MultipleFileActionsError<CommitActionType>(
        path,
        currentActionForPath.action,
        "UPDATE"
      );
    }

    const updateAction: CommitAction = {
      action: "UPDATE",
      content,
      filePath: path,
      encoding: "TEXT"
    };

    this.commitActions.push(updateAction);
  }

  public async readFile(path: string): Promise<string> {
    this.ensureNotCommitted();

    const currentActionForPath = this.currentActionForPath(path);

    if (!currentActionForPath) {
      return await this.repository.readFile(path);
    }

    if (currentActionForPath.action === "DELETE") {
      throw new FileNotFoundError(path);
    }

    return currentActionForPath.content;
  }

  public deleteFile(path: string): void {
    this.ensureNotCommitted();

    const currentActionForPath = this.currentActionForPath(path);

    if (currentActionForPath) {
      throw new MultipleFileActionsError<CommitActionType>(
        path,
        currentActionForPath.action,
        "DELETE"
      );
    }

    const deleteAction: CommitAction = {
      action: "DELETE",
      filePath: path
    };

    this.commitActions.push(deleteAction);
  }

  public async createCommit(commitMessage?: string): Promise<string> {
    this.ensureNotCommitted();

    const numberOfActions = this.commitActions.length;

    if (numberOfActions === 0) {
      throw new EmptyCommitError();
    }

    const result = await createCommit(
      this.repository.accessToken,
      this.repository.fqBranch,
      this.repository.applicationName,
      commitMessage ?? `Modified ${numberOfActions} files`,
      this.commitActions
    );

    this.hasBeenCommitted = true;
    return result;
  }

  private ensureNotCommitted() {
    if (this.hasBeenCommitted) {
      throw new AlreadyCommittedError();
    }
  }

  private currentActionForPath(path: string): CommitAction | null {
    return this.commitActions.find(ca => ca.filePath === path) ?? null;
  }
}
