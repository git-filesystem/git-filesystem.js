import {
  fqTagRefPrefix,
  FullyQualifiedTagRef,
  isFullyQualifiedTagRef
} from "@gitbuckets/abstractions";
import { getClient } from "./sdk/gql-client";

export const getAllTags = async (
  accessToken: string,
  owner: string,
  name: string
): Promise<FullyQualifiedTagRef[]> => {
  const response = await getClient(accessToken).getAllTags({
    name,
    owner
  });

  if (!response.repository) {
    throw new Error(`No repository found for ${owner}/${name}`);
  }

  return (
    response.repository.refs?.nodes
      ?.map<FullyQualifiedTagRef | null>(ref => (ref ? `${fqTagRefPrefix}${ref.name}` : null))
      .filter<FullyQualifiedTagRef>(isFullyQualifiedTagRef) ?? []
  );
};
