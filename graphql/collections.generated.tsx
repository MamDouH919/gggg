import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CollectionsQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['Int']['input']>> | Types.InputMaybe<Types.Scalars['Int']['input']>>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  name?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>>;
}>;


export type CollectionsQuery = { __typename?: 'Query', collections: { __typename?: 'CollectionPagination', total: number, per_page: number, current_page: number, from?: number | null, to?: number | null, last_page: number, has_more_pages: boolean, data: Array<{ __typename?: 'Collection', id: number, name: string, image?: { __typename?: 'Image', filePath: string } | null }> } };


export const CollectionsDocument = gql`
    query collections($id: [Int], $limit: Int, $page: Int, $name: [String]) {
  collections(id: $id, limit: $limit, page: $page, name: $name) {
    data {
      id
      image {
        filePath
      }
      name
    }
    total
    per_page
    current_page
    from
    to
    last_page
    has_more_pages
  }
}
    `;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export function useCollectionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsSuspenseQueryHookResult = ReturnType<typeof useCollectionsSuspenseQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;