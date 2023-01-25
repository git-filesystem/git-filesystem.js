import {
  CommitBuilder,
  AlreadyCommittedError,
  EmptyCommitError,
  MultipleFileActionsError,
  FileNotFoundError
} from "@git-filesystem/abstractions";
import { GitHubRepository } from "./github-repository";
import { createCommit } from "./rest/create-commit";
import { CommitAction, CommitActionType } from "./rest/create-tree";

export class GitHubCommitBuilder extends CommitBuilder {
  private commitActions: CommitAction[] = [];
  private hasBeenCommitted = false;

  public constructor(private readonly repository: GitHubRepository) {
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
      filePath: path
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
      filePath: path
    };

    this.commitActions.push(updateAction);
  }

  public async readFile(path: string): Promise<string> {
    // TODO: public async readFile(path: string, tagName: string): Promise<string> {
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

  public async createCommit(commitMessage: string): Promise<string> {
    this.ensureNotCommitted();

    const numberOfActions = this.commitActions.length;

    if (numberOfActions === 0) {
      throw new EmptyCommitError();
    }

    const result = await createCommit(
      this.repository.accessToken,
      this.repository.fqBranch,
      this.commitActions,
      commitMessage ?? `Modified ${numberOfActions} files`,
      this.repository.committerDetails,
      this.repository.authorDetails
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
