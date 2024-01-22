export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** A Category type */
export type Category = {
  __typename?: 'Category';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Product name */
  name: Scalars['String']['output'];
  /** Identifier */
  parent?: Maybe<Category>;
  /** products name */
  products?: Maybe<Array<Maybe<Product>>>;
};

export type CategoryPagination = {
  __typename?: 'CategoryPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<Category>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** A Collection For products */
export type Collection = {
  __typename?: 'Collection';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Collection image */
  image?: Maybe<Image>;
  /** Collection name */
  name: Scalars['String']['output'];
  /** products name */
  products?: Maybe<Array<Maybe<Product>>>;
};

export type CollectionPagination = {
  __typename?: 'CollectionPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<Collection>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** A Image type */
export type Image = {
  __typename?: 'Image';
  /** date of creation */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** created by user */
  createdBy: Scalars['String']['output'];
  /** image url */
  filePath: Scalars['String']['output'];
  /** image height in PX */
  height: Scalars['String']['output'];
  /** Identifier */
  id: Scalars['Int']['output'];
  /** image mime type */
  mime: Scalars['String']['output'];
  /** image name */
  name: Scalars['String']['output'];
  /** image size in KB */
  size: Scalars['String']['output'];
  /** image width in PX */
  width: Scalars['String']['output'];
};

/** Media Content Type */
export enum MediaContentTypeCode {
  ExternalVideo = 'EXTERNAL_VIDEO',
  Image = 'IMAGE',
  Model_3D = 'MODEL_3D',
  Video = 'VIDEO'
}

/** Media Status code */
export enum MediaStatusCode {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Upload Media files */
  UploadMedia: UploadMedia;
  /** add product to category */
  categoryAddProduct: Category;
  /** Remove product from category */
  categoryRemoveProduct: Category;
  /** add product to Collection */
  collectionAddProduct: Collection;
  /** Remove product from Collection */
  collectionRemoveProduct: Collection;
  /** create new category for products */
  createCategory: Category;
  /** create new Collection for products */
  createCollection: Collection;
  /** create new Product */
  createProduct: Product;
  /** create new Product media */
  createProductMedia: Product;
  /** delete categorys */
  deleteCategory: Scalars['Boolean']['output'];
  /** delete collections */
  deleteCollection: Scalars['Boolean']['output'];
  /** Delete Product */
  deleteProduct: Scalars['Boolean']['output'];
  /** update old category for products */
  updateCategory: Category;
  /** update old Collection for products */
  updateCollection: Collection;
  /** update Product */
  updateProduct: Product;
};


export type MutationUploadMediaArgs = {
  file: Scalars['Upload']['input'];
  type?: InputMaybe<MediaContentTypeCode>;
};


export type MutationCategoryAddProductArgs = {
  categoryId: Scalars['Int']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationCategoryRemoveProductArgs = {
  categoryId: Scalars['Int']['input'];
  productId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationCollectionAddProductArgs = {
  collectionId: Scalars['Int']['input'];
  productId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationCollectionRemoveProductArgs = {
  collectionId: Scalars['Int']['input'];
  productId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationCreateCategoryArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateCollectionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateProductArgs = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Array<InputMaybe<ProductMediaInput>>>;
  name: Scalars['String']['input'];
  statusCode: ProductStatusCode;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductMediaArgs = {
  media?: InputMaybe<Array<ProductMediaInput>>;
  productId: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type MutationDeleteCollectionArgs = {
  id: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type MutationDeleteProductArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateCategoryArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type MutationUpdateCollectionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  statusCode?: InputMaybe<ProductStatusCode>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

/** A Product */
export type Product = {
  __typename?: 'Product';
  /** Collections for products */
  collections?: Maybe<Array<Maybe<Collection>>>;
  /** Update date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Product description */
  description?: Maybe<Scalars['String']['output']>;
  /** type of the shipment */
  giftCard: Scalars['Boolean']['output'];
  /** Identifier */
  id: Scalars['Int']['output'];
  /** medias for products */
  media?: Maybe<Array<Maybe<ProductMedia>>>;
  /** Product name */
  name: Scalars['String']['output'];
  /** product Category */
  productCategory?: Maybe<Scalars['String']['output']>;
  /** published to store time */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** type of the shipment */
  statusCode: ProductStatusCode;
  /** Tags for products */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Update date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Product vendor name */
  vendor?: Maybe<Scalars['String']['output']>;
};

/** A Product media image or video */
export type ProductMedia = {
  __typename?: 'ProductMedia';
  /** Media alt text */
  altText: Scalars['String']['output'];
  /** Media width */
  height?: Maybe<Scalars['Float']['output']>;
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Product object */
  image?: Maybe<Image>;
  /** Media alt text */
  mediaContentType: MediaContentTypeCode;
  /** Media position */
  position: Scalars['Int']['output'];
  /** Media alt text */
  product: Product;
  /** Media status */
  status: MediaStatusCode;
  /** Media width */
  width?: Maybe<Scalars['Float']['output']>;
};

/** create product input */
export type ProductMediaInput = {
  /** A media id */
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  /** A media type */
  type?: InputMaybe<MediaContentTypeCode>;
};

export type ProductPagination = {
  __typename?: 'ProductPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<Product>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** Product status */
export enum ProductStatusCode {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT'
}

export type Query = {
  __typename?: 'Query';
  /** list Collections */
  categories: CategoryPagination;
  /** list Collections */
  collections: CollectionPagination;
  /** product */
  product: Product;
  /** list products */
  products: ProductPagination;
};


export type QueryCategoriesArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollectionsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsArgs = {
  fromDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProductStatusCode>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  toDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vendor?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Sort Type Code */
export enum SortTypeCode {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** A Tag For products */
export type Tag = {
  __typename?: 'Tag';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Tag name */
  name: Scalars['String']['output'];
};

/** Product Tag Input */
export type TagInput = {
  /** the id of the tag */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** the name of the tag */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A Upload Media type */
export type UploadMedia = {
  __typename?: 'UploadMedia';
  /** uploaded media id */
  id: Scalars['Int']['output'];
  /** uploaded media type */
  type: MediaContentTypeCode;
  /** uploaded media url */
  url: Scalars['String']['output'];
};
