import { CommitBuilder } from "@gitbuckets/abstractions";
import { GitLabRepository } from "./gitlab-repository";
import { CommitAction, createCommit } from "./gql/create-commit";

export class GitLabCommitBuilder extends CommitBuilder {
  private commitActions: CommitAction[] = [];

  public constructor(private readonly repository: GitLabRepository) {
    super(repository.jsonConfig);
  }

  public createFile(path: string, content: string): void {
    const currentActionForPath = this.currentActionForPath(path);

    if (currentActionForPath) {
      //TODO: Make more detailed
      throw new Error("Cannot have two actions for the same file");
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
    const currentActionForPath = this.currentActionForPath(path);

    if (currentActionForPath) {
      //TODO: Make more detailed
      throw new Error("Cannot have two actions for the same file");
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
    const currentActionForPath = this.currentActionForPath(path);

    if (!currentActionForPath) {
      return await this.repository.readFile(path);
    }

    if (currentActionForPath.action === "DELETE") {
      //TODO: Make more detailed
      throw new Error("Cannot read file that will be deleted");
    }

    return currentActionForPath.content;
  }

  public deleteFile(path: string): void {
    const currentActionForPath = this.currentActionForPath(path);

    if (currentActionForPath) {
      //TODO: Make more detailed
      throw new Error("Cannot have two actions for the same file");
    }

    const deleteAction: CommitAction = {
      action: "DELETE",
      filePath: path
    };

    this.commitActions.push(deleteAction);
  }

  public async createCommit(commitMessage?: string): Promise<string> {
    const numberOfActions = this.commitActions.length;

    if (numberOfActions === 0) {
      //TODO: Make more detailed
      throw new Error("Cannot create empty commit");
    }

    return await createCommit(
      this.repository.accessToken,
      this.repository.fqBranch,
      this.repository.applicationName,
      commitMessage ?? `Modified ${numberOfActions} files`,
      this.commitActions
    );
  }

  private currentActionForPath(path: string): CommitAction | null {
    return this.commitActions.find(ca => ca.filePath === path) ?? null;
  }
}
