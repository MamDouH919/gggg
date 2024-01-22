import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductsQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['Int']['input']>> | Types.InputMaybe<Types.Scalars['Int']['input']>>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductPagination', total: number, per_page: number, current_page: number, from?: number | null, to?: number | null, last_page: number, has_more_pages: boolean, data: Array<{ __typename?: 'Product', id: number, name: string, description?: string | null, vendor?: string | null, statusCode: Types.ProductStatusCode, giftCard: boolean, createdAt?: any | null, updatedAt?: any | null, media?: Array<{ __typename?: 'ProductMedia', id: number, image?: { __typename?: 'Image', filePath: string } | null } | null> | null }> } };

export type ProductQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: number, name: string, description?: string | null, vendor?: string | null, statusCode: Types.ProductStatusCode, giftCard: boolean, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, productCategory?: string | null, tags?: Array<{ __typename?: 'Tag', id: number, name: string } | null> | null, collections?: Array<{ __typename?: 'Collection', id: number, name: string, image?: { __typename?: 'Image', id: number, height: string, width: string, name: string } | null, products?: Array<{ __typename?: 'Product', id: number } | null> | null } | null> | null, media?: Array<{ __typename?: 'ProductMedia', id: number, position: number, altText: string, mediaContentType: Types.MediaContentTypeCode, status: Types.MediaStatusCode, width?: number | null, height?: number | null } | null> | null } };

export type CreateProductMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  vendor?: Types.InputMaybe<Types.Scalars['String']['input']>;
  statusCode: Types.ProductStatusCode;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: number, name: string, description?: string | null, vendor?: string | null, statusCode: Types.ProductStatusCode, giftCard: boolean, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, productCategory?: string | null, tags?: Array<{ __typename?: 'Tag', id: number, name: string } | null> | null, media?: Array<{ __typename?: 'ProductMedia', id: number, position: number, altText: string, mediaContentType: Types.MediaContentTypeCode, status: Types.MediaStatusCode, width?: number | null, height?: number | null } | null> | null } };


export const ProductsDocument = gql`
    query products($id: [Int], $limit: Int, $page: Int) {
  products(id: $id, limit: $limit, page: $page) {
    data {
      id
      name
      description
      vendor
      statusCode
      giftCard
      createdAt
      updatedAt
      media {
        id
        image {
          filePath
        }
      }
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
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductDocument = gql`
    query product($id: Int) {
  product(id: $id) {
    id
    name
    description
    vendor
    statusCode
    giftCard
    createdAt
    updatedAt
    publishedAt
    tags {
      id
      name
    }
    collections {
      id
      name
      image {
        id
        height
        width
        name
      }
      products {
        id
      }
    }
    media {
      id
      position
      altText
      mediaContentType
      status
      width
      height
    }
    productCategory
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export function useProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($name: String!, $description: String, $vendor: String, $statusCode: ProductStatusCode!) {
  createProduct(
    name: $name
    description: $description
    vendor: $vendor
    statusCode: $statusCode
  ) {
    id
    name
    description
    vendor
    statusCode
    giftCard
    createdAt
    updatedAt
    publishedAt
    tags {
      id
      name
    }
    media {
      id
      position
      altText
      mediaContentType
      status
      width
      height
    }
    productCategory
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      vendor: // value for 'vendor'
 *      statusCode: // value for 'statusCode'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;