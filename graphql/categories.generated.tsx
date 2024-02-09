import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CategoriesQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['Int']['input']>> | Types.InputMaybe<Types.Scalars['Int']['input']>>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  name?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['String']['input']>> | Types.InputMaybe<Types.Scalars['String']['input']>>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryPagination', total: number, per_page: number, current_page: number, from?: number | null, to?: number | null, last_page: number, has_more_pages: boolean, data: Array<{ __typename?: 'Category', id: number, name: string, isParent: boolean, productsCount: number, parent?: { __typename?: 'Category', id: number, name: string } | null, children?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null, image?: { __typename?: 'Image', filePath: string } | null }> } };


export const CategoriesDocument = gql`
    query categories($id: [Int], $limit: Int, $page: Int, $name: [String]) {
  categories(id: $id, limit: $limit, page: $page, name: $name) {
    data {
      id
      parent {
        id
        name
      }
      children {
        id
        name
      }
      image {
        filePath
      }
      name
      isParent
      productsCount
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
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;