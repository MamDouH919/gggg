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
  /** children categories */
  children?: Maybe<Array<Maybe<Category>>>;
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Collection image */
  image?: Maybe<Image>;
  /** category parent indicator */
  isParent: Scalars['Boolean']['output'];
  /** category root indicator */
  isRoot: Scalars['Boolean']['output'];
  /** category name */
  name: Scalars['String']['output'];
  /** parent category */
  parent?: Maybe<Category>;
  /** products name */
  products?: Maybe<Array<Maybe<Product>>>;
  /** count of the products under category */
  productsCount: Scalars['Int']['output'];
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

/** The type of media file */
export enum MediaContentTypeCode {
  /** External video */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** Image */
  Image = 'IMAGE',
  /** Model 3d */
  Model_3D = 'MODEL_3D',
  /** Video */
  Video = 'VIDEO'
}

/** Status of the media uploading file */
export enum MediaStatusCode {
  /** Failed */
  Failed = 'FAILED',
  /** Processing */
  Processing = 'PROCESSING',
  /** Ready */
  Ready = 'READY',
  /** Uploaded */
  Uploaded = 'UPLOADED'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Upload Media files */
  UploadMedia: UploadMedia;
  /** add products to category */
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
  /** Add new Product */
  createProduct: Product;
  /** createProduct Variant */
  createProductOptions?: Maybe<Array<ProductOption>>;
  /** createProduct Variant */
  createProductVariants?: Maybe<Array<ProductVariant>>;
  /** delete categorys */
  deleteCategory: Scalars['Boolean']['output'];
  /** delete collections */
  deleteCollection: Scalars['Boolean']['output'];
  /** Delete Product */
  deleteProduct: Scalars['Boolean']['output'];
  /** Delete Product option value */
  deleteProductOptionValues: Scalars['Boolean']['output'];
  /** Delete Product options */
  deleteProductOptions: Scalars['Boolean']['output'];
  /** deleteProductVariants */
  deleteProductVariants: Scalars['Boolean']['output'];
  /** login user */
  login: Scalars['String']['output'];
  /** add media to product */
  productAddMedia: Product;
  /** Product remove media from it */
  productRemoveMedia: Product;
  /** delete review to product */
  productRemoveReview: Scalars['Boolean']['output'];
  /** add media to product variant */
  productVariantAddMedia: ProductVariant;
  /** Product variant remove media from it */
  productVariantRemoveMedia: ProductVariant;
  /** update old category for products */
  updateCategory: Category;
  /** update old Collection for products */
  updateCollection: Collection;
  /** update Product */
  updateProduct: Product;
  /** Update Product Options */
  updateProductOptions?: Maybe<Array<ProductOption>>;
  /** update Product review */
  updateProductReview: ProductReview;
  /** update Product variants */
  updateProductVariants: Product;
};


export type MutationUploadMediaArgs = {
  file: Scalars['Upload']['input'];
  type?: InputMaybe<MediaContentTypeCode>;
};


export type MutationCategoryAddProductArgs = {
  categoryId: Scalars['Int']['input'];
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
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateCollectionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateProductArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Array<InputMaybe<ProductMediaInput>>>;
  name: Scalars['String']['input'];
  statusCode: ProductStatusCode;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductOptionsArgs = {
  options?: InputMaybe<Array<ProductOptionCreateInput>>;
  productId: Scalars['Int']['input'];
};


export type MutationCreateProductVariantsArgs = {
  productId: Scalars['Int']['input'];
  variants?: InputMaybe<Array<ProductVariantCreateInput>>;
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


export type MutationDeleteProductOptionValuesArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationDeleteProductOptionsArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationDeleteProductVariantsArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationLoginArgs = {
  device: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationProductAddMediaArgs = {
  media?: InputMaybe<Array<InputMaybe<ProductMediaInput>>>;
  productId: Scalars['Int']['input'];
};


export type MutationProductRemoveMediaArgs = {
  mediaId: Array<InputMaybe<Scalars['Int']['input']>>;
  productId: Scalars['Int']['input'];
};


export type MutationProductRemoveReviewArgs = {
  reviewId: Scalars['Int']['input'];
};


export type MutationProductVariantAddMediaArgs = {
  media?: InputMaybe<ProductMediaInput>;
  variantId: Scalars['Int']['input'];
};


export type MutationProductVariantRemoveMediaArgs = {
  mediaId: Scalars['Int']['input'];
  variantId: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateCollectionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  statusCode?: InputMaybe<ProductStatusCode>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductOptionsArgs = {
  optionsToAdd?: InputMaybe<Array<ProductOptionCreateInput>>;
  optionsToDelete?: InputMaybe<Array<Scalars['Int']['input']>>;
  optionsToUpdate?: InputMaybe<Array<ProductOptionUpdateInput>>;
  productId: Scalars['Int']['input'];
};


export type MutationUpdateProductReviewArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateProductVariantsArgs = {
  productId: Scalars['Int']['input'];
  variantsToAdd?: InputMaybe<Array<ProductVariantCreateInput>>;
  variantsToDelete?: InputMaybe<Array<Scalars['Int']['input']>>;
  variantsToUpdate?: InputMaybe<Array<ProductVariantUpdateInput>>;
};

/** A Product */
export type Product = {
  __typename?: 'Product';
  /** product Category */
  category?: Maybe<Category>;
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
  /** product options */
  options?: Maybe<Array<Maybe<ProductOption>>>;
  /** published to store time */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** product reviews */
  reviews?: Maybe<Array<Maybe<ProductReview>>>;
  /** type of the shipment */
  statusCode: ProductStatusCode;
  /** Tags for products */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Update date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** product variants */
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
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

/** A Product options */
export type ProductOption = {
  __typename?: 'ProductOption';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Product Option name */
  name: Scalars['String']['output'];
  /** Product Option position */
  position: Scalars['Int']['output'];
  /** Product object */
  product: Product;
  /** Product Option name */
  values?: Maybe<Array<Maybe<ProductOptionValue>>>;
};

/** Product option Input */
export type ProductOptionCreateInput = {
  /** Product variant name */
  name: Scalars['String']['input'];
  /** Product variant position */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Product option value */
  values?: InputMaybe<Array<InputMaybe<ProductOptionValueInput>>>;
};

/** Product option Input */
export type ProductOptionUpdateInput = {
  /** Product option id */
  id: Scalars['Int']['input'];
  /** Product option name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product variant position */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Product option value */
  values?: InputMaybe<Array<InputMaybe<ProductOptionValueInput>>>;
};

/** A Product option like color size */
export type ProductOptionValue = {
  __typename?: 'ProductOptionValue';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Media alt text */
  name: Scalars['String']['output'];
  /** Media for the variant */
  option?: Maybe<ProductOption>;
  /** Media position */
  position: Scalars['Int']['output'];
  /** Media for the variant */
  variantOptionValues?: Maybe<Array<Maybe<ProductVariantOptionValue>>>;
  /** variant under the otion values */
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
};

/** create Product Option Value Input */
export type ProductOptionValueInput = {
  /** A name of option value type */
  name?: InputMaybe<Scalars['String']['input']>;
  /** A media position */
  position?: InputMaybe<Scalars['Int']['input']>;
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

/** A Product review */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** Product review text */
  body: Scalars['String']['output'];
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Product object */
  product: Product;
  /** Product Option rate */
  rating: Scalars['Float']['output'];
};

/** The sort by attributes */
export enum ProductSortCode {
  /** Best selling */
  BestSelling = 'BEST_SELLING',
  /** Created date */
  CreatedDate = 'CREATED_DATE',
  /** Featured */
  Featured = 'FEATURED',
  /** Name */
  Name = 'NAME',
  /** Price */
  Price = 'PRICE'
}

/** The product status */
export enum ProductStatusCode {
  /** Active */
  Active = 'ACTIVE',
  /** Archived */
  Archived = 'ARCHIVED',
  /** Draft */
  Draft = 'DRAFT'
}

/** A Product Variant black/M -> 100$ */
export type ProductVariant = {
  __typename?: 'ProductVariant';
  /** Media alt text */
  DisplayName: Scalars['String']['output'];
  /** Media width */
  barcode?: Maybe<Scalars['String']['output']>;
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Media for the variant */
  media?: Maybe<ProductMedia>;
  /** Media status */
  originCountryCode?: Maybe<Scalars['String']['output']>;
  /** Media position */
  position: Scalars['Int']['output'];
  /** Media alt text */
  price: Scalars['Float']['output'];
  /** product that has this variant */
  product: Product;
  /** Media width */
  quantity: Scalars['Float']['output'];
  /** require shipping attribute for this variant */
  requireShipping?: Maybe<Scalars['Boolean']['output']>;
  /** Stock Keeping Unit for variant */
  sku: Scalars['String']['output'];
  /** track */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  /** Media for the variant */
  values?: Maybe<Array<Maybe<ProductOptionValue>>>;
  /** Media for the variant */
  variantOptionValues?: Maybe<Array<Maybe<ProductVariantOptionValue>>>;
  /** Media width */
  weight: Scalars['Float']['output'];
  /** Media width */
  weightUnitCode: WeightUnitCode;
};

/** Product Variant Input */
export type ProductVariantCreateInput = {
  /** product variant barcode */
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** product variant media */
  media?: InputMaybe<ProductMediaInput>;
  /** Product option vlaue ids to be appeneded */
  optionValueIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Product variant position */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Product variant price */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** product variant quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Product variant sku */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** product variant weight */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** product variant weight unit code */
  weightUnitCode?: InputMaybe<WeightUnitCode>;
};

/** A Product options */
export type ProductVariantOptionValue = {
  __typename?: 'ProductVariantOptionValue';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** Product Option name */
  optionValue: ProductOptionValue;
  /** Product Option position */
  position: Scalars['Int']['output'];
  /** Product object */
  variant: ProductVariant;
};

export type ProductVariantPagination = {
  __typename?: 'ProductVariantPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<ProductVariant>;
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

/** Product Variant to update Input */
export type ProductVariantUpdateInput = {
  /** product variant barcode */
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** Product variant vlaue ids to be appeneded */
  id: Scalars['Int']['input'];
  /** Product option vlaue ids to be appeneded */
  optionValueIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Product variant position */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Product variant price */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** product variant quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Product variant sku */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** product variant weight */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** product variant weight unit code */
  weightUnitCode?: InputMaybe<WeightUnitCode>;
};

export type Query = {
  __typename?: 'Query';
  /** list Categories */
  categories: CategoryPagination;
  /** get Category by id */
  category: Category;
  /** get Collection by id */
  collection: Collection;
  /** list Collections */
  collections: CollectionPagination;
  /** get media */
  getMedia: ProductMedia;
  /** get list of media */
  media: Array<Maybe<ProductMedia>>;
  /** product */
  product: Product;
  /** Product OptionQuery by id */
  productOption: ProductOption;
  /** Product Variant by variant id */
  productVariant: ProductVariant;
  /** List of Products Variants */
  productVariants: ProductVariantPagination;
  /** list products */
  products: ProductPagination;
  /** list tags */
  tags: TagPagination;
};


export type QueryCategoriesArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  root?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollectionsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetMediaArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMediaArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductOptionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductVariantArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductVariantsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsArgs = {
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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


export type QueryTagsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Sort Type Code for sorting lists */
export enum SortTypeCode {
  /** Ascending */
  Ascending = 'ASCENDING',
  /** Descending */
  Descending = 'DESCENDING'
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

export type TagPagination = {
  __typename?: 'TagPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<Tag>;
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

/** An user type */
export type User = {
  __typename?: 'User';
  /** Identifier */
  id: Scalars['Int']['output'];
  /** name */
  name: Scalars['String']['output'];
};

/** Weight Units */
export enum WeightUnitCode {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS'
}
