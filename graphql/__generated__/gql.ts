/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\tfragment IdeaCard on Idea {\n\t\tid\n\t\tsummary\n\t\tdescription\n\t\tdependencies {\n\t\t\tid\n\t\t\tsummary\n\t\t}\n\t\ttargetPages\n\t\ttargetComponents\n\t\ttargetVersion\n\t\tideaStatus\n\t}\n": types.IdeaCardFragmentDoc,
    "\n\tfragment PosterThumbnail on Poster {\n\t\tslug\n\t\tname\n\t\tposter {\n\t\t\turl(transformation: { image: { resize: { width: 640 } } })\n\t\t}\n\t}\n": types.PosterThumbnailFragmentDoc,
    "\n\tfragment PosterFull on Poster {\n\t\tid\n\t\tslug\n\t\tname\n\t\tdescription\n\t\tformat\n\t\tposter {\n\t\t\turl\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t}\n": types.PosterFullFragmentDoc,
    "\n\tquery Ideas($activeIdeaId: ID!) {\n\t\tbacklog: ideas(where: { ideaStatus: PENDING, targetVersion: \"TBD\" }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tplanned: ideas(where: { ideaStatus: PENDING, targetVersion_not: \"TBD\" }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tongoing: ideas(where: { ideaStatus: IN_PROGRESS }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\ttesting: ideas(where: { ideaStatus: TESTING }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tdone: ideas(where: { ideaStatus: DONE }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tactiveIdea: idea(where: { id: $activeIdeaId }) {\n\t\t\t...IdeaCard\n\t\t}\n\t}\n": types.IdeasDocument,
    "\n\tquery Posters {\n\t\tstandard: posters(where: { format: A3 }, first: 50) {\n\t\t\tslug\n\t\t\tname\n\t\t\tposter {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t\tvinyl: posters(where: { format: VINYL }, first: 50) {\n\t\t\tslug\n\t\t\tname\n\t\t\tposter {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n": types.PostersDocument,
    "\n\tquery Poster($slug: String!) {\n\t\tposter(where: { slug: $slug }) {\n\t\t\t...PosterFull\n\t\t}\n\t}\n": types.PosterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment IdeaCard on Idea {\n\t\tid\n\t\tsummary\n\t\tdescription\n\t\tdependencies {\n\t\t\tid\n\t\t\tsummary\n\t\t}\n\t\ttargetPages\n\t\ttargetComponents\n\t\ttargetVersion\n\t\tideaStatus\n\t}\n"): (typeof documents)["\n\tfragment IdeaCard on Idea {\n\t\tid\n\t\tsummary\n\t\tdescription\n\t\tdependencies {\n\t\t\tid\n\t\t\tsummary\n\t\t}\n\t\ttargetPages\n\t\ttargetComponents\n\t\ttargetVersion\n\t\tideaStatus\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment PosterThumbnail on Poster {\n\t\tslug\n\t\tname\n\t\tposter {\n\t\t\turl(transformation: { image: { resize: { width: 640 } } })\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment PosterThumbnail on Poster {\n\t\tslug\n\t\tname\n\t\tposter {\n\t\t\turl(transformation: { image: { resize: { width: 640 } } })\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment PosterFull on Poster {\n\t\tid\n\t\tslug\n\t\tname\n\t\tdescription\n\t\tformat\n\t\tposter {\n\t\t\turl\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment PosterFull on Poster {\n\t\tid\n\t\tslug\n\t\tname\n\t\tdescription\n\t\tformat\n\t\tposter {\n\t\t\turl\n\t\t\twidth\n\t\t\theight\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Ideas($activeIdeaId: ID!) {\n\t\tbacklog: ideas(where: { ideaStatus: PENDING, targetVersion: \"TBD\" }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tplanned: ideas(where: { ideaStatus: PENDING, targetVersion_not: \"TBD\" }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tongoing: ideas(where: { ideaStatus: IN_PROGRESS }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\ttesting: ideas(where: { ideaStatus: TESTING }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tdone: ideas(where: { ideaStatus: DONE }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tactiveIdea: idea(where: { id: $activeIdeaId }) {\n\t\t\t...IdeaCard\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Ideas($activeIdeaId: ID!) {\n\t\tbacklog: ideas(where: { ideaStatus: PENDING, targetVersion: \"TBD\" }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tplanned: ideas(where: { ideaStatus: PENDING, targetVersion_not: \"TBD\" }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tongoing: ideas(where: { ideaStatus: IN_PROGRESS }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\ttesting: ideas(where: { ideaStatus: TESTING }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tdone: ideas(where: { ideaStatus: DONE }) {\n\t\t\t...IdeaCard\n\t\t}\n\t\tactiveIdea: idea(where: { id: $activeIdeaId }) {\n\t\t\t...IdeaCard\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Posters {\n\t\tstandard: posters(where: { format: A3 }, first: 50) {\n\t\t\tslug\n\t\t\tname\n\t\t\tposter {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t\tvinyl: posters(where: { format: VINYL }, first: 50) {\n\t\t\tslug\n\t\t\tname\n\t\t\tposter {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Posters {\n\t\tstandard: posters(where: { format: A3 }, first: 50) {\n\t\t\tslug\n\t\t\tname\n\t\t\tposter {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t\tvinyl: posters(where: { format: VINYL }, first: 50) {\n\t\t\tslug\n\t\t\tname\n\t\t\tposter {\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Poster($slug: String!) {\n\t\tposter(where: { slug: $slug }) {\n\t\t\t...PosterFull\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Poster($slug: String!) {\n\t\tposter(where: { slug: $slug }) {\n\t\t\t...PosterFull\n\t\t}\n\t}\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;