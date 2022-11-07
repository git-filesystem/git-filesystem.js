export class MultipleFileActionsError<T extends string> extends Error {
  constructor(path: string, currentAction: T, additionalAction: T) {
    const lowerCurrentAction = currentAction.toLowerCase();
    const lowerAdditionalAction = additionalAction.toLowerCase();

    super(
      `Cannot ${lowerAdditionalAction} the path ${path} because it already has a ${lowerCurrentAction} action in this commitBuilder`
    );
  }
}
