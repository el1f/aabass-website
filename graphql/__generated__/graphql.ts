/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  bagPictureBean: Array<Bean>;
  coverThought: Array<Thought>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  pictureCoffeePlace: Array<CoffeePlace>;
  posterPoster: Array<Poster>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetBagPictureBeanArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BeanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeanWhereInput>;
};


/** Asset system model */
export type AssetCoverThoughtArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ThoughtOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThoughtWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPictureCoffeePlaceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CoffeePlaceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeePlaceWhereInput>;
};


/** Asset system model */
export type AssetPosterPosterArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PosterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PosterWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  bagCoffee?: InputMaybe<CoffeeCreateManyInlineInput>;
  bagPictureBean?: InputMaybe<BeanCreateManyInlineInput>;
  cafeCoffee?: InputMaybe<CoffeeCreateManyInlineInput>;
  coverThought?: InputMaybe<ThoughtCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  drinkCoffee?: InputMaybe<CoffeeCreateManyInlineInput>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  pictureCoffeePlace?: InputMaybe<CoffeePlaceCreateManyInlineInput>;
  posterPoster?: InputMaybe<PosterCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bagPictureBean_every?: InputMaybe<BeanWhereInput>;
  bagPictureBean_none?: InputMaybe<BeanWhereInput>;
  bagPictureBean_some?: InputMaybe<BeanWhereInput>;
  coverThought_every?: InputMaybe<ThoughtWhereInput>;
  coverThought_none?: InputMaybe<ThoughtWhereInput>;
  coverThought_some?: InputMaybe<ThoughtWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  pictureCoffeePlace_every?: InputMaybe<CoffeePlaceWhereInput>;
  pictureCoffeePlace_none?: InputMaybe<CoffeePlaceWhereInput>;
  pictureCoffeePlace_some?: InputMaybe<CoffeePlaceWhereInput>;
  posterPoster_every?: InputMaybe<PosterWhereInput>;
  posterPoster_none?: InputMaybe<PosterWhereInput>;
  posterPoster_some?: InputMaybe<PosterWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  bagCoffee?: InputMaybe<CoffeeUpdateManyInlineInput>;
  bagPictureBean?: InputMaybe<BeanUpdateManyInlineInput>;
  cafeCoffee?: InputMaybe<CoffeeUpdateManyInlineInput>;
  coverThought?: InputMaybe<ThoughtUpdateManyInlineInput>;
  drinkCoffee?: InputMaybe<CoffeeUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  pictureCoffeePlace?: InputMaybe<CoffeePlaceUpdateManyInlineInput>;
  posterPoster?: InputMaybe<PosterUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bagPictureBean_every?: InputMaybe<BeanWhereInput>;
  bagPictureBean_none?: InputMaybe<BeanWhereInput>;
  bagPictureBean_some?: InputMaybe<BeanWhereInput>;
  coverThought_every?: InputMaybe<ThoughtWhereInput>;
  coverThought_none?: InputMaybe<ThoughtWhereInput>;
  coverThought_some?: InputMaybe<ThoughtWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  pictureCoffeePlace_every?: InputMaybe<CoffeePlaceWhereInput>;
  pictureCoffeePlace_none?: InputMaybe<CoffeePlaceWhereInput>;
  pictureCoffeePlace_some?: InputMaybe<CoffeePlaceWhereInput>;
  posterPoster_every?: InputMaybe<PosterWhereInput>;
  posterPoster_none?: InputMaybe<PosterWhereInput>;
  posterPoster_some?: InputMaybe<PosterWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Bean = Node & {
  __typename?: 'Bean';
  bagPicture?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Bean>;
  espressoScore?: Maybe<Scalars['Int']>;
  filterScore?: Maybe<Scalars['Int']>;
  /** List of Bean versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  isFavorite: Scalars['Boolean'];
  name: Scalars['String'];
  origin: Scalars['String'];
  process: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  roaster: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  tastings: Array<Tasting>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BeanBagPictureArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BeanCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BeanDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type BeanHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type BeanPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BeanScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BeanTastingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TastingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TastingWhereInput>;
};


export type BeanUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BeanConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BeanWhereUniqueInput;
};

/** A connection to a list of items. */
export type BeanConnection = {
  __typename?: 'BeanConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BeanEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BeanCreateInput = {
  bagPicture?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  espressoScore?: InputMaybe<Scalars['Int']>;
  filterScore?: InputMaybe<Scalars['Int']>;
  isFavorite: Scalars['Boolean'];
  name: Scalars['String'];
  origin: Scalars['String'];
  process: Scalars['String'];
  roaster: Scalars['String'];
  tastings?: InputMaybe<TastingCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BeanCreateManyInlineInput = {
  /** Connect multiple existing Bean documents */
  connect?: InputMaybe<Array<BeanWhereUniqueInput>>;
  /** Create and connect multiple existing Bean documents */
  create?: InputMaybe<Array<BeanCreateInput>>;
};

export type BeanCreateOneInlineInput = {
  /** Connect one existing Bean document */
  connect?: InputMaybe<BeanWhereUniqueInput>;
  /** Create and connect one Bean document */
  create?: InputMaybe<BeanCreateInput>;
};

/** An edge in a connection. */
export type BeanEdge = {
  __typename?: 'BeanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Bean;
};

/** Identifies documents */
export type BeanManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeanWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeanWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeanWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bagPicture?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BeanWhereStageInput>;
  documentInStages_none?: InputMaybe<BeanWhereStageInput>;
  documentInStages_some?: InputMaybe<BeanWhereStageInput>;
  espressoScore?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  espressoScore_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  espressoScore_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  espressoScore_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  espressoScore_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  espressoScore_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  espressoScore_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  espressoScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterScore?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  filterScore_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  filterScore_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  filterScore_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  filterScore_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  filterScore_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  filterScore_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  filterScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isFavorite_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  origin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  origin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  origin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  origin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  origin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  origin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  origin_starts_with?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  process_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  process_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  process_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  process_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  process_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  process_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  process_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  process_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  process_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  roaster?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  roaster_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  roaster_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  roaster_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  roaster_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  roaster_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  roaster_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  roaster_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  roaster_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  roaster_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tastings_every?: InputMaybe<TastingWhereInput>;
  tastings_none?: InputMaybe<TastingWhereInput>;
  tastings_some?: InputMaybe<TastingWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BeanOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EspressoScoreAsc = 'espressoScore_ASC',
  EspressoScoreDesc = 'espressoScore_DESC',
  FilterScoreAsc = 'filterScore_ASC',
  FilterScoreDesc = 'filterScore_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFavoriteAsc = 'isFavorite_ASC',
  IsFavoriteDesc = 'isFavorite_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  ProcessAsc = 'process_ASC',
  ProcessDesc = 'process_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RoasterAsc = 'roaster_ASC',
  RoasterDesc = 'roaster_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BeanUpdateInput = {
  bagPicture?: InputMaybe<AssetUpdateOneInlineInput>;
  espressoScore?: InputMaybe<Scalars['Int']>;
  filterScore?: InputMaybe<Scalars['Int']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  roaster?: InputMaybe<Scalars['String']>;
  tastings?: InputMaybe<TastingUpdateManyInlineInput>;
};

export type BeanUpdateManyInlineInput = {
  /** Connect multiple existing Bean documents */
  connect?: InputMaybe<Array<BeanConnectInput>>;
  /** Create and connect multiple Bean documents */
  create?: InputMaybe<Array<BeanCreateInput>>;
  /** Delete multiple Bean documents */
  delete?: InputMaybe<Array<BeanWhereUniqueInput>>;
  /** Disconnect multiple Bean documents */
  disconnect?: InputMaybe<Array<BeanWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Bean documents */
  set?: InputMaybe<Array<BeanWhereUniqueInput>>;
  /** Update multiple Bean documents */
  update?: InputMaybe<Array<BeanUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Bean documents */
  upsert?: InputMaybe<Array<BeanUpsertWithNestedWhereUniqueInput>>;
};

export type BeanUpdateManyInput = {
  espressoScore?: InputMaybe<Scalars['Int']>;
  filterScore?: InputMaybe<Scalars['Int']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  roaster?: InputMaybe<Scalars['String']>;
};

export type BeanUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BeanUpdateManyInput;
  /** Document search */
  where: BeanWhereInput;
};

export type BeanUpdateOneInlineInput = {
  /** Connect existing Bean document */
  connect?: InputMaybe<BeanWhereUniqueInput>;
  /** Create and connect one Bean document */
  create?: InputMaybe<BeanCreateInput>;
  /** Delete currently connected Bean document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Bean document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Bean document */
  update?: InputMaybe<BeanUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Bean document */
  upsert?: InputMaybe<BeanUpsertWithNestedWhereUniqueInput>;
};

export type BeanUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BeanUpdateInput;
  /** Unique document search */
  where: BeanWhereUniqueInput;
};

export type BeanUpsertInput = {
  /** Create document if it didn't exist */
  create: BeanCreateInput;
  /** Update document if it exists */
  update: BeanUpdateInput;
};

export type BeanUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BeanUpsertInput;
  /** Unique document search */
  where: BeanWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BeanWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type BeanWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeanWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeanWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeanWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bagPicture?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BeanWhereStageInput>;
  documentInStages_none?: InputMaybe<BeanWhereStageInput>;
  documentInStages_some?: InputMaybe<BeanWhereStageInput>;
  espressoScore?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  espressoScore_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  espressoScore_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  espressoScore_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  espressoScore_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  espressoScore_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  espressoScore_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  espressoScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterScore?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  filterScore_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  filterScore_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  filterScore_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  filterScore_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  filterScore_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  filterScore_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  filterScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isFavorite_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  origin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  origin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  origin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  origin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  origin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  origin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  origin_starts_with?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  process_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  process_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  process_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  process_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  process_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  process_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  process_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  process_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  process_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  roaster?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  roaster_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  roaster_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  roaster_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  roaster_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  roaster_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  roaster_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  roaster_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  roaster_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  roaster_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tastings_every?: InputMaybe<TastingWhereInput>;
  tastings_none?: InputMaybe<TastingWhereInput>;
  tastings_some?: InputMaybe<TastingWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BeanWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BeanWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BeanWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BeanWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BeanWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Bean record uniquely */
export type BeanWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum Component {
  PageLayout = 'PAGE_LAYOUT'
}

export type Coffee = {
  __typename?: 'Coffee';
  bag?: Maybe<Asset>;
  cafe?: Maybe<Asset>;
  drink?: Maybe<Asset>;
  elevation?: Maybe<Scalars['Int']>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  notes: Array<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  process?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  review?: Maybe<Scalars['String']>;
  roastLevel?: Maybe<Scalars['Int']>;
  roaster?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  type?: Maybe<Scalars['String']>;
};


export type CoffeeBagArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeeCafeArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeeDrinkArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CoffeeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CoffeeWhereUniqueInput;
};

/** A connection to a list of items. */
export type CoffeeConnection = {
  __typename?: 'CoffeeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CoffeeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CoffeeCreateInput = {
  bag?: InputMaybe<AssetCreateOneInlineInput>;
  cafe?: InputMaybe<AssetCreateOneInlineInput>;
  drink?: InputMaybe<AssetCreateOneInlineInput>;
  elevation?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<Scalars['String']>>;
  origin?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  producer?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  roaster?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CoffeeCreateManyInlineInput = {
  /** Create and connect multiple existing Coffee documents */
  create?: InputMaybe<Array<CoffeeCreateInput>>;
};

export type CoffeeCreateOneInlineInput = {
  /** Create and connect one Coffee document */
  create?: InputMaybe<CoffeeCreateInput>;
};

export type CoffeeCreateWithPositionInput = {
  /** Document to create */
  data: CoffeeCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CoffeeEdge = {
  __typename?: 'CoffeeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Coffee;
};

/** Identifies documents */
export type CoffeeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CoffeeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CoffeeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CoffeeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bag?: InputMaybe<AssetWhereInput>;
  cafe?: InputMaybe<AssetWhereInput>;
  drink?: InputMaybe<AssetWhereInput>;
  elevation?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  elevation_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  elevation_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  elevation_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  elevation_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  elevation_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  elevation_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  elevation_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  notes?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  notes_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  notes_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  notes_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  notes_not?: InputMaybe<Array<Scalars['String']>>;
  origin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  origin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  origin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  origin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  origin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  origin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  origin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  origin_starts_with?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  process_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  process_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  process_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  process_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  process_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  process_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  process_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  process_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  process_starts_with?: InputMaybe<Scalars['String']>;
  producer?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  producer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  producer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  producer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  producer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  producer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  producer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  producer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  producer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  producer_starts_with?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  review_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  review_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  review_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  review_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  review_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  review_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  review_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  review_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  review_starts_with?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  roastLevel_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  roastLevel_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  roastLevel_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  roastLevel_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  roastLevel_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  roastLevel_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  roastLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  roaster?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  roaster_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  roaster_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  roaster_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  roaster_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  roaster_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  roaster_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  roaster_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  roaster_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  roaster_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  type_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CoffeeOrderByInput {
  ElevationAsc = 'elevation_ASC',
  ElevationDesc = 'elevation_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NotesAsc = 'notes_ASC',
  NotesDesc = 'notes_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  ProcessAsc = 'process_ASC',
  ProcessDesc = 'process_DESC',
  ProducerAsc = 'producer_ASC',
  ProducerDesc = 'producer_DESC',
  ReviewAsc = 'review_ASC',
  ReviewDesc = 'review_DESC',
  RoastLevelAsc = 'roastLevel_ASC',
  RoastLevelDesc = 'roastLevel_DESC',
  RoasterAsc = 'roaster_ASC',
  RoasterDesc = 'roaster_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type CoffeePlace = Node & {
  __typename?: 'CoffeePlace';
  country: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CoffeePlace>;
  /** List of CoffeePlace versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  isFavorite: Scalars['Boolean'];
  name: Scalars['String'];
  picture?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  score?: Maybe<Scalars['Int']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  visits: Array<Scalars['DateTime']>;
};


export type CoffeePlaceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeePlaceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CoffeePlaceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CoffeePlacePictureArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeePlacePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeePlaceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CoffeePlaceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CoffeePlaceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CoffeePlaceWhereUniqueInput;
};

/** A connection to a list of items. */
export type CoffeePlaceConnection = {
  __typename?: 'CoffeePlaceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CoffeePlaceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CoffeePlaceCreateInput = {
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isFavorite: Scalars['Boolean'];
  name: Scalars['String'];
  picture?: InputMaybe<AssetCreateOneInlineInput>;
  score?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  visits: Array<Scalars['DateTime']>;
};

export type CoffeePlaceCreateManyInlineInput = {
  /** Connect multiple existing CoffeePlace documents */
  connect?: InputMaybe<Array<CoffeePlaceWhereUniqueInput>>;
  /** Create and connect multiple existing CoffeePlace documents */
  create?: InputMaybe<Array<CoffeePlaceCreateInput>>;
};

export type CoffeePlaceCreateOneInlineInput = {
  /** Connect one existing CoffeePlace document */
  connect?: InputMaybe<CoffeePlaceWhereUniqueInput>;
  /** Create and connect one CoffeePlace document */
  create?: InputMaybe<CoffeePlaceCreateInput>;
};

/** An edge in a connection. */
export type CoffeePlaceEdge = {
  __typename?: 'CoffeePlaceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CoffeePlace;
};

/** Identifies documents */
export type CoffeePlaceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CoffeePlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CoffeePlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CoffeePlaceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  country_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  country_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  country_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CoffeePlaceWhereStageInput>;
  documentInStages_none?: InputMaybe<CoffeePlaceWhereStageInput>;
  documentInStages_some?: InputMaybe<CoffeePlaceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isFavorite_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  score?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  score_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  score_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  score_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  score_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  score_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  score_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  score_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  visits?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  visits_contains_all?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  visits_contains_none?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  visits_contains_some?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  visits_not?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum CoffeePlaceOrderByInput {
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFavoriteAsc = 'isFavorite_ASC',
  IsFavoriteDesc = 'isFavorite_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ScoreAsc = 'score_ASC',
  ScoreDesc = 'score_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VisitsAsc = 'visits_ASC',
  VisitsDesc = 'visits_DESC'
}

export type CoffeePlaceUpdateInput = {
  country?: InputMaybe<Scalars['String']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetUpdateOneInlineInput>;
  score?: InputMaybe<Scalars['Int']>;
  visits?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type CoffeePlaceUpdateManyInlineInput = {
  /** Connect multiple existing CoffeePlace documents */
  connect?: InputMaybe<Array<CoffeePlaceConnectInput>>;
  /** Create and connect multiple CoffeePlace documents */
  create?: InputMaybe<Array<CoffeePlaceCreateInput>>;
  /** Delete multiple CoffeePlace documents */
  delete?: InputMaybe<Array<CoffeePlaceWhereUniqueInput>>;
  /** Disconnect multiple CoffeePlace documents */
  disconnect?: InputMaybe<Array<CoffeePlaceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CoffeePlace documents */
  set?: InputMaybe<Array<CoffeePlaceWhereUniqueInput>>;
  /** Update multiple CoffeePlace documents */
  update?: InputMaybe<Array<CoffeePlaceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CoffeePlace documents */
  upsert?: InputMaybe<Array<CoffeePlaceUpsertWithNestedWhereUniqueInput>>;
};

export type CoffeePlaceUpdateManyInput = {
  country?: InputMaybe<Scalars['String']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  visits?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type CoffeePlaceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CoffeePlaceUpdateManyInput;
  /** Document search */
  where: CoffeePlaceWhereInput;
};

export type CoffeePlaceUpdateOneInlineInput = {
  /** Connect existing CoffeePlace document */
  connect?: InputMaybe<CoffeePlaceWhereUniqueInput>;
  /** Create and connect one CoffeePlace document */
  create?: InputMaybe<CoffeePlaceCreateInput>;
  /** Delete currently connected CoffeePlace document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CoffeePlace document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CoffeePlace document */
  update?: InputMaybe<CoffeePlaceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CoffeePlace document */
  upsert?: InputMaybe<CoffeePlaceUpsertWithNestedWhereUniqueInput>;
};

export type CoffeePlaceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CoffeePlaceUpdateInput;
  /** Unique document search */
  where: CoffeePlaceWhereUniqueInput;
};

export type CoffeePlaceUpsertInput = {
  /** Create document if it didn't exist */
  create: CoffeePlaceCreateInput;
  /** Update document if it exists */
  update: CoffeePlaceUpdateInput;
};

export type CoffeePlaceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CoffeePlaceUpsertInput;
  /** Unique document search */
  where: CoffeePlaceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CoffeePlaceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CoffeePlaceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CoffeePlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CoffeePlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CoffeePlaceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  country_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  country_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  country_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CoffeePlaceWhereStageInput>;
  documentInStages_none?: InputMaybe<CoffeePlaceWhereStageInput>;
  documentInStages_some?: InputMaybe<CoffeePlaceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isFavorite_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  score?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  score_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  score_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  score_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  score_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  score_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  score_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  score_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  visits?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  visits_contains_all?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  visits_contains_none?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  visits_contains_some?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  visits_not?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CoffeePlaceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CoffeePlaceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CoffeePlaceWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CoffeePlaceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CoffeePlaceWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CoffeePlace record uniquely */
export type CoffeePlaceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum CoffeeRecipeType {
  Aeropress = 'AEROPRESS',
  BatchBrew = 'BATCH_BREW',
  Cappuccino = 'CAPPUCCINO',
  Espresso = 'ESPRESSO',
  Pourover = 'POUROVER'
}

export type CoffeeUpdateInput = {
  bag?: InputMaybe<AssetUpdateOneInlineInput>;
  cafe?: InputMaybe<AssetUpdateOneInlineInput>;
  drink?: InputMaybe<AssetUpdateOneInlineInput>;
  elevation?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<Scalars['String']>>;
  origin?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  producer?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  roaster?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CoffeeUpdateManyInlineInput = {
  /** Create and connect multiple Coffee component instances */
  create?: InputMaybe<Array<CoffeeCreateWithPositionInput>>;
  /** Delete multiple Coffee documents */
  delete?: InputMaybe<Array<CoffeeWhereUniqueInput>>;
  /** Update multiple Coffee component instances */
  update?: InputMaybe<Array<CoffeeUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Coffee component instances */
  upsert?: InputMaybe<Array<CoffeeUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CoffeeUpdateManyInput = {
  elevation?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<Scalars['String']>>;
  origin?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  producer?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  roaster?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CoffeeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CoffeeUpdateManyInput;
  /** Document search */
  where: CoffeeWhereInput;
};

export type CoffeeUpdateOneInlineInput = {
  /** Create and connect one Coffee document */
  create?: InputMaybe<CoffeeCreateInput>;
  /** Delete currently connected Coffee document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Coffee document */
  update?: InputMaybe<CoffeeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Coffee document */
  upsert?: InputMaybe<CoffeeUpsertWithNestedWhereUniqueInput>;
};

export type CoffeeUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CoffeeUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CoffeeWhereUniqueInput;
};

export type CoffeeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CoffeeUpdateInput;
  /** Unique document search */
  where: CoffeeWhereUniqueInput;
};

export type CoffeeUpsertInput = {
  /** Create document if it didn't exist */
  create: CoffeeCreateInput;
  /** Update document if it exists */
  update: CoffeeUpdateInput;
};

export type CoffeeUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CoffeeUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CoffeeWhereUniqueInput;
};

export type CoffeeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CoffeeUpsertInput;
  /** Unique document search */
  where: CoffeeWhereUniqueInput;
};

/** Identifies documents */
export type CoffeeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CoffeeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CoffeeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CoffeeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bag?: InputMaybe<AssetWhereInput>;
  cafe?: InputMaybe<AssetWhereInput>;
  drink?: InputMaybe<AssetWhereInput>;
  elevation?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  elevation_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  elevation_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  elevation_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  elevation_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  elevation_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  elevation_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  elevation_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  notes?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  notes_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  notes_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  notes_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  notes_not?: InputMaybe<Array<Scalars['String']>>;
  origin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  origin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  origin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  origin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  origin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  origin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  origin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  origin_starts_with?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  process_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  process_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  process_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  process_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  process_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  process_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  process_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  process_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  process_starts_with?: InputMaybe<Scalars['String']>;
  producer?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  producer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  producer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  producer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  producer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  producer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  producer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  producer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  producer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  producer_starts_with?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  review_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  review_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  review_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  review_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  review_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  review_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  review_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  review_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  review_starts_with?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  roastLevel_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  roastLevel_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  roastLevel_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  roastLevel_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  roastLevel_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  roastLevel_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  roastLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  roaster?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  roaster_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  roaster_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  roaster_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  roaster_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  roaster_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  roaster_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  roaster_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  roaster_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  roaster_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  type_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  type_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  type_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  type_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Coffee record uniquely */
export type CoffeeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum Idea_Status {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Testing = 'TESTING'
}

/** The concepts that I want to develop further in the website. */
export type Idea = Node & {
  __typename?: 'Idea';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dependencies: Array<Idea>;
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Idea>;
  /** List of Idea versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  ideaStatus: Idea_Status;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Idea>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The name of the feature that I want to create */
  summary: Scalars['String'];
  targetComponents: Array<Component>;
  targetPages: Array<Page>;
  targetVersion: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** The concepts that I want to develop further in the website. */
export type IdeaCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaDependenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<IdeaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IdeaWhereInput>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** The concepts that I want to develop further in the website. */
export type IdeaPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** The concepts that I want to develop further in the website. */
export type IdeaUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type IdeaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: IdeaWhereUniqueInput;
};

/** A connection to a list of items. */
export type IdeaConnection = {
  __typename?: 'IdeaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<IdeaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type IdeaCreateInput = {
  clauyj7j42cfq01t12zhcg69m?: InputMaybe<IdeaCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dependencies?: InputMaybe<IdeaCreateManyInlineInput>;
  /** description input for default locale (en) */
  description: Scalars['String'];
  ideaStatus: Idea_Status;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<IdeaCreateLocalizationsInput>;
  /** summary input for default locale (en) */
  summary: Scalars['String'];
  targetComponents?: InputMaybe<Array<Component>>;
  targetPages?: InputMaybe<Array<Page>>;
  targetVersion: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IdeaCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  summary: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IdeaCreateLocalizationInput = {
  /** Localization input */
  data: IdeaCreateLocalizationDataInput;
  locale: Locale;
};

export type IdeaCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<IdeaCreateLocalizationInput>>;
};

export type IdeaCreateManyInlineInput = {
  /** Connect multiple existing Idea documents */
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  /** Create and connect multiple existing Idea documents */
  create?: InputMaybe<Array<IdeaCreateInput>>;
};

export type IdeaCreateOneInlineInput = {
  /** Connect one existing Idea document */
  connect?: InputMaybe<IdeaWhereUniqueInput>;
  /** Create and connect one Idea document */
  create?: InputMaybe<IdeaCreateInput>;
};

/** An edge in a connection. */
export type IdeaEdge = {
  __typename?: 'IdeaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Idea;
};

/** Identifies documents */
export type IdeaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IdeaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IdeaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IdeaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dependencies_every?: InputMaybe<IdeaWhereInput>;
  dependencies_none?: InputMaybe<IdeaWhereInput>;
  dependencies_some?: InputMaybe<IdeaWhereInput>;
  documentInStages_every?: InputMaybe<IdeaWhereStageInput>;
  documentInStages_none?: InputMaybe<IdeaWhereStageInput>;
  documentInStages_some?: InputMaybe<IdeaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ideaStatus?: InputMaybe<Idea_Status>;
  /** All values that are contained in given list. */
  ideaStatus_in?: InputMaybe<Array<InputMaybe<Idea_Status>>>;
  /** All values that are not equal to given value. */
  ideaStatus_not?: InputMaybe<Idea_Status>;
  /** All values that are not contained in given list. */
  ideaStatus_not_in?: InputMaybe<Array<InputMaybe<Idea_Status>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  targetComponents?: InputMaybe<Array<Component>>;
  /** Matches if the field array contains *all* items provided to the filter */
  targetComponents_contains_all?: InputMaybe<Array<Component>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  targetComponents_contains_none?: InputMaybe<Array<Component>>;
  /** Matches if the field array contains at least one item provided to the filter */
  targetComponents_contains_some?: InputMaybe<Array<Component>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  targetComponents_not?: InputMaybe<Array<Component>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  targetPages?: InputMaybe<Array<Page>>;
  /** Matches if the field array contains *all* items provided to the filter */
  targetPages_contains_all?: InputMaybe<Array<Page>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  targetPages_contains_none?: InputMaybe<Array<Page>>;
  /** Matches if the field array contains at least one item provided to the filter */
  targetPages_contains_some?: InputMaybe<Array<Page>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  targetPages_not?: InputMaybe<Array<Page>>;
  targetVersion?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  targetVersion_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  targetVersion_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  targetVersion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  targetVersion_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  targetVersion_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  targetVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  targetVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  targetVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  targetVersion_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum IdeaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdeaStatusAsc = 'ideaStatus_ASC',
  IdeaStatusDesc = 'ideaStatus_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TargetComponentsAsc = 'targetComponents_ASC',
  TargetComponentsDesc = 'targetComponents_DESC',
  TargetPagesAsc = 'targetPages_ASC',
  TargetPagesDesc = 'targetPages_DESC',
  TargetVersionAsc = 'targetVersion_ASC',
  TargetVersionDesc = 'targetVersion_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type IdeaUpdateInput = {
  clauyj7j42cfq01t12zhcg69m?: InputMaybe<IdeaUpdateManyInlineInput>;
  dependencies?: InputMaybe<IdeaUpdateManyInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  ideaStatus?: InputMaybe<Idea_Status>;
  /** Manage document localizations */
  localizations?: InputMaybe<IdeaUpdateLocalizationsInput>;
  /** summary input for default locale (en) */
  summary?: InputMaybe<Scalars['String']>;
  targetComponents?: InputMaybe<Array<Component>>;
  targetPages?: InputMaybe<Array<Page>>;
  targetVersion?: InputMaybe<Scalars['String']>;
};

export type IdeaUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type IdeaUpdateLocalizationInput = {
  data: IdeaUpdateLocalizationDataInput;
  locale: Locale;
};

export type IdeaUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<IdeaCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<IdeaUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<IdeaUpsertLocalizationInput>>;
};

export type IdeaUpdateManyInlineInput = {
  /** Connect multiple existing Idea documents */
  connect?: InputMaybe<Array<IdeaConnectInput>>;
  /** Create and connect multiple Idea documents */
  create?: InputMaybe<Array<IdeaCreateInput>>;
  /** Delete multiple Idea documents */
  delete?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  /** Disconnect multiple Idea documents */
  disconnect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Idea documents */
  set?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  /** Update multiple Idea documents */
  update?: InputMaybe<Array<IdeaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Idea documents */
  upsert?: InputMaybe<Array<IdeaUpsertWithNestedWhereUniqueInput>>;
};

export type IdeaUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  ideaStatus?: InputMaybe<Idea_Status>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<IdeaUpdateManyLocalizationsInput>;
  targetComponents?: InputMaybe<Array<Component>>;
  targetPages?: InputMaybe<Array<Page>>;
  targetVersion?: InputMaybe<Scalars['String']>;
};

export type IdeaUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type IdeaUpdateManyLocalizationInput = {
  data: IdeaUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type IdeaUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<IdeaUpdateManyLocalizationInput>>;
};

export type IdeaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IdeaUpdateManyInput;
  /** Document search */
  where: IdeaWhereInput;
};

export type IdeaUpdateOneInlineInput = {
  /** Connect existing Idea document */
  connect?: InputMaybe<IdeaWhereUniqueInput>;
  /** Create and connect one Idea document */
  create?: InputMaybe<IdeaCreateInput>;
  /** Delete currently connected Idea document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Idea document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Idea document */
  update?: InputMaybe<IdeaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Idea document */
  upsert?: InputMaybe<IdeaUpsertWithNestedWhereUniqueInput>;
};

export type IdeaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IdeaUpdateInput;
  /** Unique document search */
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertInput = {
  /** Create document if it didn't exist */
  create: IdeaCreateInput;
  /** Update document if it exists */
  update: IdeaUpdateInput;
};

export type IdeaUpsertLocalizationInput = {
  create: IdeaCreateLocalizationDataInput;
  locale: Locale;
  update: IdeaUpdateLocalizationDataInput;
};

export type IdeaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IdeaUpsertInput;
  /** Unique document search */
  where: IdeaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type IdeaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type IdeaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IdeaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IdeaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IdeaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dependencies_every?: InputMaybe<IdeaWhereInput>;
  dependencies_none?: InputMaybe<IdeaWhereInput>;
  dependencies_some?: InputMaybe<IdeaWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<IdeaWhereStageInput>;
  documentInStages_none?: InputMaybe<IdeaWhereStageInput>;
  documentInStages_some?: InputMaybe<IdeaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ideaStatus?: InputMaybe<Idea_Status>;
  /** All values that are contained in given list. */
  ideaStatus_in?: InputMaybe<Array<InputMaybe<Idea_Status>>>;
  /** All values that are not equal to given value. */
  ideaStatus_not?: InputMaybe<Idea_Status>;
  /** All values that are not contained in given list. */
  ideaStatus_not_in?: InputMaybe<Array<InputMaybe<Idea_Status>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  summary?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  summary_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  summary_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  summary_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  summary_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  summary_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  summary_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  summary_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  targetComponents?: InputMaybe<Array<Component>>;
  /** Matches if the field array contains *all* items provided to the filter */
  targetComponents_contains_all?: InputMaybe<Array<Component>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  targetComponents_contains_none?: InputMaybe<Array<Component>>;
  /** Matches if the field array contains at least one item provided to the filter */
  targetComponents_contains_some?: InputMaybe<Array<Component>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  targetComponents_not?: InputMaybe<Array<Component>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  targetPages?: InputMaybe<Array<Page>>;
  /** Matches if the field array contains *all* items provided to the filter */
  targetPages_contains_all?: InputMaybe<Array<Page>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  targetPages_contains_none?: InputMaybe<Array<Page>>;
  /** Matches if the field array contains at least one item provided to the filter */
  targetPages_contains_some?: InputMaybe<Array<Page>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  targetPages_not?: InputMaybe<Array<Page>>;
  targetVersion?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  targetVersion_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  targetVersion_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  targetVersion_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  targetVersion_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  targetVersion_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  targetVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  targetVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  targetVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  targetVersion_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type IdeaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IdeaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IdeaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IdeaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IdeaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Idea record uniquely */
export type IdeaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one bean */
  createBean?: Maybe<Bean>;
  /** Create one coffeePlace */
  createCoffeePlace?: Maybe<CoffeePlace>;
  /** Create one idea */
  createIdea?: Maybe<Idea>;
  /** Create one poster */
  createPoster?: Maybe<Poster>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one tasting */
  createTasting?: Maybe<Tasting>;
  /** Create one thought */
  createThought?: Maybe<Thought>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one bean from _all_ existing stages. Returns deleted document. */
  deleteBean?: Maybe<Bean>;
  /** Delete one coffeePlace from _all_ existing stages. Returns deleted document. */
  deleteCoffeePlace?: Maybe<CoffeePlace>;
  /** Delete one idea from _all_ existing stages. Returns deleted document. */
  deleteIdea?: Maybe<Idea>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Bean documents
   * @deprecated Please use the new paginated many mutation (deleteManyBeansConnection)
   */
  deleteManyBeans: BatchPayload;
  /** Delete many Bean documents, return deleted documents */
  deleteManyBeansConnection: BeanConnection;
  /**
   * Delete many CoffeePlace documents
   * @deprecated Please use the new paginated many mutation (deleteManyCoffeePlacesConnection)
   */
  deleteManyCoffeePlaces: BatchPayload;
  /** Delete many CoffeePlace documents, return deleted documents */
  deleteManyCoffeePlacesConnection: CoffeePlaceConnection;
  /**
   * Delete many Idea documents
   * @deprecated Please use the new paginated many mutation (deleteManyIdeasConnection)
   */
  deleteManyIdeas: BatchPayload;
  /** Delete many Idea documents, return deleted documents */
  deleteManyIdeasConnection: IdeaConnection;
  /**
   * Delete many Poster documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostersConnection)
   */
  deleteManyPosters: BatchPayload;
  /** Delete many Poster documents, return deleted documents */
  deleteManyPostersConnection: PosterConnection;
  /**
   * Delete many Tasting documents
   * @deprecated Please use the new paginated many mutation (deleteManyTastingsConnection)
   */
  deleteManyTastings: BatchPayload;
  /** Delete many Tasting documents, return deleted documents */
  deleteManyTastingsConnection: TastingConnection;
  /**
   * Delete many Thought documents
   * @deprecated Please use the new paginated many mutation (deleteManyThoughtsConnection)
   */
  deleteManyThoughts: BatchPayload;
  /** Delete many Thought documents, return deleted documents */
  deleteManyThoughtsConnection: ThoughtConnection;
  /** Delete one poster from _all_ existing stages. Returns deleted document. */
  deletePoster?: Maybe<Poster>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one tasting from _all_ existing stages. Returns deleted document. */
  deleteTasting?: Maybe<Tasting>;
  /** Delete one thought from _all_ existing stages. Returns deleted document. */
  deleteThought?: Maybe<Thought>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one bean */
  publishBean?: Maybe<Bean>;
  /** Publish one coffeePlace */
  publishCoffeePlace?: Maybe<CoffeePlace>;
  /** Publish one idea */
  publishIdea?: Maybe<Idea>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Bean documents
   * @deprecated Please use the new paginated many mutation (publishManyBeansConnection)
   */
  publishManyBeans: BatchPayload;
  /** Publish many Bean documents */
  publishManyBeansConnection: BeanConnection;
  /**
   * Publish many CoffeePlace documents
   * @deprecated Please use the new paginated many mutation (publishManyCoffeePlacesConnection)
   */
  publishManyCoffeePlaces: BatchPayload;
  /** Publish many CoffeePlace documents */
  publishManyCoffeePlacesConnection: CoffeePlaceConnection;
  /**
   * Publish many Idea documents
   * @deprecated Please use the new paginated many mutation (publishManyIdeasConnection)
   */
  publishManyIdeas: BatchPayload;
  /** Publish many Idea documents */
  publishManyIdeasConnection: IdeaConnection;
  /**
   * Publish many Poster documents
   * @deprecated Please use the new paginated many mutation (publishManyPostersConnection)
   */
  publishManyPosters: BatchPayload;
  /** Publish many Poster documents */
  publishManyPostersConnection: PosterConnection;
  /**
   * Publish many Tasting documents
   * @deprecated Please use the new paginated many mutation (publishManyTastingsConnection)
   */
  publishManyTastings: BatchPayload;
  /** Publish many Tasting documents */
  publishManyTastingsConnection: TastingConnection;
  /**
   * Publish many Thought documents
   * @deprecated Please use the new paginated many mutation (publishManyThoughtsConnection)
   */
  publishManyThoughts: BatchPayload;
  /** Publish many Thought documents */
  publishManyThoughtsConnection: ThoughtConnection;
  /** Publish one poster */
  publishPoster?: Maybe<Poster>;
  /** Publish one tasting */
  publishTasting?: Maybe<Tasting>;
  /** Publish one thought */
  publishThought?: Maybe<Thought>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one bean */
  schedulePublishBean?: Maybe<Bean>;
  /** Schedule to publish one coffeePlace */
  schedulePublishCoffeePlace?: Maybe<CoffeePlace>;
  /** Schedule to publish one idea */
  schedulePublishIdea?: Maybe<Idea>;
  /** Schedule to publish one poster */
  schedulePublishPoster?: Maybe<Poster>;
  /** Schedule to publish one tasting */
  schedulePublishTasting?: Maybe<Tasting>;
  /** Schedule to publish one thought */
  schedulePublishThought?: Maybe<Thought>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one bean from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBean?: Maybe<Bean>;
  /** Unpublish one coffeePlace from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCoffeePlace?: Maybe<CoffeePlace>;
  /** Unpublish one idea from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishIdea?: Maybe<Idea>;
  /** Unpublish one poster from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPoster?: Maybe<Poster>;
  /** Unpublish one tasting from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTasting?: Maybe<Tasting>;
  /** Unpublish one thought from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishThought?: Maybe<Thought>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one bean from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBean?: Maybe<Bean>;
  /** Unpublish one coffeePlace from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCoffeePlace?: Maybe<CoffeePlace>;
  /** Unpublish one idea from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishIdea?: Maybe<Idea>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Bean documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBeansConnection)
   */
  unpublishManyBeans: BatchPayload;
  /** Find many Bean documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBeansConnection: BeanConnection;
  /**
   * Unpublish many CoffeePlace documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCoffeePlacesConnection)
   */
  unpublishManyCoffeePlaces: BatchPayload;
  /** Find many CoffeePlace documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCoffeePlacesConnection: CoffeePlaceConnection;
  /**
   * Unpublish many Idea documents
   * @deprecated Please use the new paginated many mutation (unpublishManyIdeasConnection)
   */
  unpublishManyIdeas: BatchPayload;
  /** Find many Idea documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyIdeasConnection: IdeaConnection;
  /**
   * Unpublish many Poster documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostersConnection)
   */
  unpublishManyPosters: BatchPayload;
  /** Find many Poster documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostersConnection: PosterConnection;
  /**
   * Unpublish many Tasting documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTastingsConnection)
   */
  unpublishManyTastings: BatchPayload;
  /** Find many Tasting documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTastingsConnection: TastingConnection;
  /**
   * Unpublish many Thought documents
   * @deprecated Please use the new paginated many mutation (unpublishManyThoughtsConnection)
   */
  unpublishManyThoughts: BatchPayload;
  /** Find many Thought documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyThoughtsConnection: ThoughtConnection;
  /** Unpublish one poster from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPoster?: Maybe<Poster>;
  /** Unpublish one tasting from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTasting?: Maybe<Tasting>;
  /** Unpublish one thought from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishThought?: Maybe<Thought>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one bean */
  updateBean?: Maybe<Bean>;
  /** Update one coffeePlace */
  updateCoffeePlace?: Maybe<CoffeePlace>;
  /** Update one idea */
  updateIdea?: Maybe<Idea>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many beans
   * @deprecated Please use the new paginated many mutation (updateManyBeansConnection)
   */
  updateManyBeans: BatchPayload;
  /** Update many Bean documents */
  updateManyBeansConnection: BeanConnection;
  /**
   * Update many coffeePlaces
   * @deprecated Please use the new paginated many mutation (updateManyCoffeePlacesConnection)
   */
  updateManyCoffeePlaces: BatchPayload;
  /** Update many CoffeePlace documents */
  updateManyCoffeePlacesConnection: CoffeePlaceConnection;
  /**
   * Update many ideas
   * @deprecated Please use the new paginated many mutation (updateManyIdeasConnection)
   */
  updateManyIdeas: BatchPayload;
  /** Update many Idea documents */
  updateManyIdeasConnection: IdeaConnection;
  /**
   * Update many posters
   * @deprecated Please use the new paginated many mutation (updateManyPostersConnection)
   */
  updateManyPosters: BatchPayload;
  /** Update many Poster documents */
  updateManyPostersConnection: PosterConnection;
  /**
   * Update many tastings
   * @deprecated Please use the new paginated many mutation (updateManyTastingsConnection)
   */
  updateManyTastings: BatchPayload;
  /** Update many Tasting documents */
  updateManyTastingsConnection: TastingConnection;
  /**
   * Update many thoughts
   * @deprecated Please use the new paginated many mutation (updateManyThoughtsConnection)
   */
  updateManyThoughts: BatchPayload;
  /** Update many Thought documents */
  updateManyThoughtsConnection: ThoughtConnection;
  /** Update one poster */
  updatePoster?: Maybe<Poster>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one tasting */
  updateTasting?: Maybe<Tasting>;
  /** Update one thought */
  updateThought?: Maybe<Thought>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one bean */
  upsertBean?: Maybe<Bean>;
  /** Upsert one coffeePlace */
  upsertCoffeePlace?: Maybe<CoffeePlace>;
  /** Upsert one idea */
  upsertIdea?: Maybe<Idea>;
  /** Upsert one poster */
  upsertPoster?: Maybe<Poster>;
  /** Upsert one tasting */
  upsertTasting?: Maybe<Tasting>;
  /** Upsert one thought */
  upsertThought?: Maybe<Thought>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBeanArgs = {
  data: BeanCreateInput;
};


export type MutationCreateCoffeePlaceArgs = {
  data: CoffeePlaceCreateInput;
};


export type MutationCreateIdeaArgs = {
  data: IdeaCreateInput;
};


export type MutationCreatePosterArgs = {
  data: PosterCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTastingArgs = {
  data: TastingCreateInput;
};


export type MutationCreateThoughtArgs = {
  data: ThoughtCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBeanArgs = {
  where: BeanWhereUniqueInput;
};


export type MutationDeleteCoffeePlaceArgs = {
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationDeleteIdeaArgs = {
  where: IdeaWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBeansArgs = {
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationDeleteManyBeansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationDeleteManyCoffeePlacesArgs = {
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationDeleteManyCoffeePlacesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationDeleteManyIdeasArgs = {
  where?: InputMaybe<IdeaManyWhereInput>;
};


export type MutationDeleteManyIdeasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IdeaManyWhereInput>;
};


export type MutationDeleteManyPostersArgs = {
  where?: InputMaybe<PosterManyWhereInput>;
};


export type MutationDeleteManyPostersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PosterManyWhereInput>;
};


export type MutationDeleteManyTastingsArgs = {
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationDeleteManyTastingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationDeleteManyThoughtsArgs = {
  where?: InputMaybe<ThoughtManyWhereInput>;
};


export type MutationDeleteManyThoughtsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThoughtManyWhereInput>;
};


export type MutationDeletePosterArgs = {
  where: PosterWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTastingArgs = {
  where: TastingWhereUniqueInput;
};


export type MutationDeleteThoughtArgs = {
  where: ThoughtWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishBeanArgs = {
  to?: Array<Stage>;
  where: BeanWhereUniqueInput;
};


export type MutationPublishCoffeePlaceArgs = {
  to?: Array<Stage>;
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationPublishIdeaArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: IdeaWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyBeansArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationPublishManyBeansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationPublishManyCoffeePlacesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationPublishManyCoffeePlacesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationPublishManyIdeasArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<IdeaManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyIdeasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<IdeaManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPostersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PosterManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPostersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PosterManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyTastingsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationPublishManyTastingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationPublishManyThoughtsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ThoughtManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyThoughtsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ThoughtManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPosterArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PosterWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishTastingArgs = {
  to?: Array<Stage>;
  where: TastingWhereUniqueInput;
};


export type MutationPublishThoughtArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ThoughtWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishBeanArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BeanWhereUniqueInput;
};


export type MutationSchedulePublishCoffeePlaceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationSchedulePublishIdeaArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: IdeaWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPosterArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PosterWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishTastingArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TastingWhereUniqueInput;
};


export type MutationSchedulePublishThoughtArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ThoughtWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBeanArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: BeanWhereUniqueInput;
};


export type MutationScheduleUnpublishCoffeePlaceArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationScheduleUnpublishIdeaArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IdeaWhereUniqueInput;
};


export type MutationScheduleUnpublishPosterArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PosterWhereUniqueInput;
};


export type MutationScheduleUnpublishTastingArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TastingWhereUniqueInput;
};


export type MutationScheduleUnpublishThoughtArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ThoughtWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBeanArgs = {
  from?: Array<Stage>;
  where: BeanWhereUniqueInput;
};


export type MutationUnpublishCoffeePlaceArgs = {
  from?: Array<Stage>;
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationUnpublishIdeaArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IdeaWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBeansArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationUnpublishManyBeansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationUnpublishManyCoffeePlacesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationUnpublishManyCoffeePlacesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationUnpublishManyIdeasArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IdeaManyWhereInput>;
};


export type MutationUnpublishManyIdeasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IdeaManyWhereInput>;
};


export type MutationUnpublishManyPostersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PosterManyWhereInput>;
};


export type MutationUnpublishManyPostersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PosterManyWhereInput>;
};


export type MutationUnpublishManyTastingsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationUnpublishManyTastingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationUnpublishManyThoughtsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ThoughtManyWhereInput>;
};


export type MutationUnpublishManyThoughtsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ThoughtManyWhereInput>;
};


export type MutationUnpublishPosterArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PosterWhereUniqueInput;
};


export type MutationUnpublishTastingArgs = {
  from?: Array<Stage>;
  where: TastingWhereUniqueInput;
};


export type MutationUnpublishThoughtArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ThoughtWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBeanArgs = {
  data: BeanUpdateInput;
  where: BeanWhereUniqueInput;
};


export type MutationUpdateCoffeePlaceArgs = {
  data: CoffeePlaceUpdateInput;
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationUpdateIdeaArgs = {
  data: IdeaUpdateInput;
  where: IdeaWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBeansArgs = {
  data: BeanUpdateManyInput;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationUpdateManyBeansConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: BeanUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeanManyWhereInput>;
};


export type MutationUpdateManyCoffeePlacesArgs = {
  data: CoffeePlaceUpdateManyInput;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationUpdateManyCoffeePlacesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CoffeePlaceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeePlaceManyWhereInput>;
};


export type MutationUpdateManyIdeasArgs = {
  data: IdeaUpdateManyInput;
  where?: InputMaybe<IdeaManyWhereInput>;
};


export type MutationUpdateManyIdeasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IdeaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IdeaManyWhereInput>;
};


export type MutationUpdateManyPostersArgs = {
  data: PosterUpdateManyInput;
  where?: InputMaybe<PosterManyWhereInput>;
};


export type MutationUpdateManyPostersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PosterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PosterManyWhereInput>;
};


export type MutationUpdateManyTastingsArgs = {
  data: TastingUpdateManyInput;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationUpdateManyTastingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TastingUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TastingManyWhereInput>;
};


export type MutationUpdateManyThoughtsArgs = {
  data: ThoughtUpdateManyInput;
  where?: InputMaybe<ThoughtManyWhereInput>;
};


export type MutationUpdateManyThoughtsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ThoughtUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThoughtManyWhereInput>;
};


export type MutationUpdatePosterArgs = {
  data: PosterUpdateInput;
  where: PosterWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTastingArgs = {
  data: TastingUpdateInput;
  where: TastingWhereUniqueInput;
};


export type MutationUpdateThoughtArgs = {
  data: ThoughtUpdateInput;
  where: ThoughtWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBeanArgs = {
  upsert: BeanUpsertInput;
  where: BeanWhereUniqueInput;
};


export type MutationUpsertCoffeePlaceArgs = {
  upsert: CoffeePlaceUpsertInput;
  where: CoffeePlaceWhereUniqueInput;
};


export type MutationUpsertIdeaArgs = {
  upsert: IdeaUpsertInput;
  where: IdeaWhereUniqueInput;
};


export type MutationUpsertPosterArgs = {
  upsert: PosterUpsertInput;
  where: PosterWhereUniqueInput;
};


export type MutationUpsertTastingArgs = {
  upsert: TastingUpsertInput;
  where: TastingWhereUniqueInput;
};


export type MutationUpsertThoughtArgs = {
  upsert: ThoughtUpsertInput;
  where: ThoughtWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export enum Page {
  About = 'ABOUT',
  Blog = 'BLOG',
  CaseStudies = 'CASE_STUDIES',
  Changelog = 'CHANGELOG',
  Coffee = 'COFFEE',
  Home = 'HOME',
  Ideas = 'IDEAS',
  Longboard = 'LONGBOARD',
  Music = 'MUSIC',
  NotFound = 'NOT_FOUND',
  Posters = 'POSTERS',
  Shop = 'SHOP',
  ThreePlayground = 'THREE_PLAYGROUND',
  Travel = 'TRAVEL'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Posters designed by myself for fun or for work */
export type Poster = Node & {
  __typename?: 'Poster';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Poster>;
  format?: Maybe<PosterFormat>;
  /** List of Poster versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Poster>;
  name: Scalars['String'];
  poster: Asset;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Posters designed by myself for fun or for work */
export type PosterCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Posters designed by myself for fun or for work */
export type PosterCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Posters designed by myself for fun or for work */
export type PosterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Posters designed by myself for fun or for work */
export type PosterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Posters designed by myself for fun or for work */
export type PosterLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Posters designed by myself for fun or for work */
export type PosterPosterArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Posters designed by myself for fun or for work */
export type PosterPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Posters designed by myself for fun or for work */
export type PosterPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Posters designed by myself for fun or for work */
export type PosterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Posters designed by myself for fun or for work */
export type PosterUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Posters designed by myself for fun or for work */
export type PosterUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PosterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PosterWhereUniqueInput;
};

/** A connection to a list of items. */
export type PosterConnection = {
  __typename?: 'PosterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PosterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PosterCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<PosterFormat>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PosterCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  poster: AssetCreateOneInlineInput;
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PosterCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PosterCreateLocalizationInput = {
  /** Localization input */
  data: PosterCreateLocalizationDataInput;
  locale: Locale;
};

export type PosterCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PosterCreateLocalizationInput>>;
};

export type PosterCreateManyInlineInput = {
  /** Connect multiple existing Poster documents */
  connect?: InputMaybe<Array<PosterWhereUniqueInput>>;
  /** Create and connect multiple existing Poster documents */
  create?: InputMaybe<Array<PosterCreateInput>>;
};

export type PosterCreateOneInlineInput = {
  /** Connect one existing Poster document */
  connect?: InputMaybe<PosterWhereUniqueInput>;
  /** Create and connect one Poster document */
  create?: InputMaybe<PosterCreateInput>;
};

/** An edge in a connection. */
export type PosterEdge = {
  __typename?: 'PosterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Poster;
};

export enum PosterFormat {
  A3 = 'A3',
  Vinyl = 'VINYL'
}

/** Identifies documents */
export type PosterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PosterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PosterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PosterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PosterWhereStageInput>;
  documentInStages_none?: InputMaybe<PosterWhereStageInput>;
  documentInStages_some?: InputMaybe<PosterWhereStageInput>;
  format?: InputMaybe<PosterFormat>;
  /** All values that are contained in given list. */
  format_in?: InputMaybe<Array<InputMaybe<PosterFormat>>>;
  /** All values that are not equal to given value. */
  format_not?: InputMaybe<PosterFormat>;
  /** All values that are not contained in given list. */
  format_not_in?: InputMaybe<Array<InputMaybe<PosterFormat>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  poster?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PosterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PosterUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<PosterFormat>;
  /** Manage document localizations */
  localizations?: InputMaybe<PosterUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PosterUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PosterUpdateLocalizationInput = {
  data: PosterUpdateLocalizationDataInput;
  locale: Locale;
};

export type PosterUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PosterCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PosterUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PosterUpsertLocalizationInput>>;
};

export type PosterUpdateManyInlineInput = {
  /** Connect multiple existing Poster documents */
  connect?: InputMaybe<Array<PosterConnectInput>>;
  /** Create and connect multiple Poster documents */
  create?: InputMaybe<Array<PosterCreateInput>>;
  /** Delete multiple Poster documents */
  delete?: InputMaybe<Array<PosterWhereUniqueInput>>;
  /** Disconnect multiple Poster documents */
  disconnect?: InputMaybe<Array<PosterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Poster documents */
  set?: InputMaybe<Array<PosterWhereUniqueInput>>;
  /** Update multiple Poster documents */
  update?: InputMaybe<Array<PosterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Poster documents */
  upsert?: InputMaybe<Array<PosterUpsertWithNestedWhereUniqueInput>>;
};

export type PosterUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<PosterFormat>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PosterUpdateManyLocalizationsInput>;
};

export type PosterUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type PosterUpdateManyLocalizationInput = {
  data: PosterUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PosterUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PosterUpdateManyLocalizationInput>>;
};

export type PosterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PosterUpdateManyInput;
  /** Document search */
  where: PosterWhereInput;
};

export type PosterUpdateOneInlineInput = {
  /** Connect existing Poster document */
  connect?: InputMaybe<PosterWhereUniqueInput>;
  /** Create and connect one Poster document */
  create?: InputMaybe<PosterCreateInput>;
  /** Delete currently connected Poster document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Poster document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Poster document */
  update?: InputMaybe<PosterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Poster document */
  upsert?: InputMaybe<PosterUpsertWithNestedWhereUniqueInput>;
};

export type PosterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PosterUpdateInput;
  /** Unique document search */
  where: PosterWhereUniqueInput;
};

export type PosterUpsertInput = {
  /** Create document if it didn't exist */
  create: PosterCreateInput;
  /** Update document if it exists */
  update: PosterUpdateInput;
};

export type PosterUpsertLocalizationInput = {
  create: PosterCreateLocalizationDataInput;
  locale: Locale;
  update: PosterUpdateLocalizationDataInput;
};

export type PosterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PosterUpsertInput;
  /** Unique document search */
  where: PosterWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PosterWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PosterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PosterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PosterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PosterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<PosterWhereStageInput>;
  documentInStages_none?: InputMaybe<PosterWhereStageInput>;
  documentInStages_some?: InputMaybe<PosterWhereStageInput>;
  format?: InputMaybe<PosterFormat>;
  /** All values that are contained in given list. */
  format_in?: InputMaybe<Array<InputMaybe<PosterFormat>>>;
  /** All values that are not equal to given value. */
  format_not?: InputMaybe<PosterFormat>;
  /** All values that are not contained in given list. */
  format_not_in?: InputMaybe<Array<InputMaybe<PosterFormat>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PosterWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PosterWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PosterWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PosterWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PosterWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Poster record uniquely */
export type PosterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single bean */
  bean?: Maybe<Bean>;
  /** Retrieve document version */
  beanVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple beans */
  beans: Array<Bean>;
  /** Retrieve multiple beans using the Relay connection interface */
  beansConnection: BeanConnection;
  /** Retrieve a single coffeePlace */
  coffeePlace?: Maybe<CoffeePlace>;
  /** Retrieve document version */
  coffeePlaceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple coffeePlaces */
  coffeePlaces: Array<CoffeePlace>;
  /** Retrieve multiple coffeePlaces using the Relay connection interface */
  coffeePlacesConnection: CoffeePlaceConnection;
  /** Retrieve a single idea */
  idea?: Maybe<Idea>;
  /** Retrieve document version */
  ideaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple ideas */
  ideas: Array<Idea>;
  /** Retrieve multiple ideas using the Relay connection interface */
  ideasConnection: IdeaConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single poster */
  poster?: Maybe<Poster>;
  /** Retrieve document version */
  posterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posters */
  posters: Array<Poster>;
  /** Retrieve multiple posters using the Relay connection interface */
  postersConnection: PosterConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single tasting */
  tasting?: Maybe<Tasting>;
  /** Retrieve document version */
  tastingVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tastings */
  tastings: Array<Tasting>;
  /** Retrieve multiple tastings using the Relay connection interface */
  tastingsConnection: TastingConnection;
  /** Retrieve a single thought */
  thought?: Maybe<Thought>;
  /** Retrieve document version */
  thoughtVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple thoughts */
  thoughts: Array<Thought>;
  /** Retrieve multiple thoughts using the Relay connection interface */
  thoughtsConnection: ThoughtConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBeanArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BeanWhereUniqueInput;
};


export type QueryBeanVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBeansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BeanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BeanWhereInput>;
};


export type QueryBeansConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BeanOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BeanWhereInput>;
};


export type QueryCoffeePlaceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CoffeePlaceWhereUniqueInput;
};


export type QueryCoffeePlaceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCoffeePlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CoffeePlaceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CoffeePlaceWhereInput>;
};


export type QueryCoffeePlacesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CoffeePlaceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CoffeePlaceWhereInput>;
};


export type QueryIdeaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: IdeaWhereUniqueInput;
};


export type QueryIdeaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryIdeasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<IdeaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<IdeaWhereInput>;
};


export type QueryIdeasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<IdeaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<IdeaWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPosterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PosterWhereUniqueInput;
};


export type QueryPosterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PosterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PosterWhereInput>;
};


export type QueryPostersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PosterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PosterWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTastingArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TastingWhereUniqueInput;
};


export type QueryTastingVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTastingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TastingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TastingWhereInput>;
};


export type QueryTastingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TastingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TastingWhereInput>;
};


export type QueryThoughtArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ThoughtWhereUniqueInput;
};


export type QueryThoughtVersionArgs = {
  where: VersionWhereInput;
};


export type QueryThoughtsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ThoughtOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ThoughtWhereInput>;
};


export type QueryThoughtsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ThoughtOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ThoughtWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Bean | CoffeePlace | Idea | Poster | Tasting | Thought;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Tasting = Node & {
  __typename?: 'Tasting';
  bean?: Maybe<Bean>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars['Date'];
  /** Get the document in other stages */
  documentInStages: Array<Tasting>;
  /** List of Tasting versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  notes: Array<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  recipe: CoffeeRecipeType;
  scheduledIn: Array<ScheduledOperation>;
  score: Scalars['Int'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TastingBeanArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TastingCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TastingDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TastingHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TastingPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TastingScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TastingUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TastingConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TastingWhereUniqueInput;
};

/** A connection to a list of items. */
export type TastingConnection = {
  __typename?: 'TastingConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TastingEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TastingCreateInput = {
  bean?: InputMaybe<BeanCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  notes: Array<Scalars['String']>;
  recipe: CoffeeRecipeType;
  score: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TastingCreateManyInlineInput = {
  /** Connect multiple existing Tasting documents */
  connect?: InputMaybe<Array<TastingWhereUniqueInput>>;
  /** Create and connect multiple existing Tasting documents */
  create?: InputMaybe<Array<TastingCreateInput>>;
};

export type TastingCreateOneInlineInput = {
  /** Connect one existing Tasting document */
  connect?: InputMaybe<TastingWhereUniqueInput>;
  /** Create and connect one Tasting document */
  create?: InputMaybe<TastingCreateInput>;
};

/** An edge in a connection. */
export type TastingEdge = {
  __typename?: 'TastingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Tasting;
};

/** Identifies documents */
export type TastingManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TastingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TastingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TastingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bean?: InputMaybe<BeanWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  documentInStages_every?: InputMaybe<TastingWhereStageInput>;
  documentInStages_none?: InputMaybe<TastingWhereStageInput>;
  documentInStages_some?: InputMaybe<TastingWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  notes?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  notes_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  notes_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  notes_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  notes_not?: InputMaybe<Array<Scalars['String']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  recipe?: InputMaybe<CoffeeRecipeType>;
  /** All values that are contained in given list. */
  recipe_in?: InputMaybe<Array<InputMaybe<CoffeeRecipeType>>>;
  /** All values that are not equal to given value. */
  recipe_not?: InputMaybe<CoffeeRecipeType>;
  /** All values that are not contained in given list. */
  recipe_not_in?: InputMaybe<Array<InputMaybe<CoffeeRecipeType>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  score?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  score_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  score_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  score_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  score_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  score_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  score_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  score_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TastingOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NotesAsc = 'notes_ASC',
  NotesDesc = 'notes_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RecipeAsc = 'recipe_ASC',
  RecipeDesc = 'recipe_DESC',
  ScoreAsc = 'score_ASC',
  ScoreDesc = 'score_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TastingUpdateInput = {
  bean?: InputMaybe<BeanUpdateOneInlineInput>;
  date?: InputMaybe<Scalars['Date']>;
  notes?: InputMaybe<Array<Scalars['String']>>;
  recipe?: InputMaybe<CoffeeRecipeType>;
  score?: InputMaybe<Scalars['Int']>;
};

export type TastingUpdateManyInlineInput = {
  /** Connect multiple existing Tasting documents */
  connect?: InputMaybe<Array<TastingConnectInput>>;
  /** Create and connect multiple Tasting documents */
  create?: InputMaybe<Array<TastingCreateInput>>;
  /** Delete multiple Tasting documents */
  delete?: InputMaybe<Array<TastingWhereUniqueInput>>;
  /** Disconnect multiple Tasting documents */
  disconnect?: InputMaybe<Array<TastingWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Tasting documents */
  set?: InputMaybe<Array<TastingWhereUniqueInput>>;
  /** Update multiple Tasting documents */
  update?: InputMaybe<Array<TastingUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tasting documents */
  upsert?: InputMaybe<Array<TastingUpsertWithNestedWhereUniqueInput>>;
};

export type TastingUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']>;
  notes?: InputMaybe<Array<Scalars['String']>>;
  recipe?: InputMaybe<CoffeeRecipeType>;
  score?: InputMaybe<Scalars['Int']>;
};

export type TastingUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TastingUpdateManyInput;
  /** Document search */
  where: TastingWhereInput;
};

export type TastingUpdateOneInlineInput = {
  /** Connect existing Tasting document */
  connect?: InputMaybe<TastingWhereUniqueInput>;
  /** Create and connect one Tasting document */
  create?: InputMaybe<TastingCreateInput>;
  /** Delete currently connected Tasting document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Tasting document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Tasting document */
  update?: InputMaybe<TastingUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tasting document */
  upsert?: InputMaybe<TastingUpsertWithNestedWhereUniqueInput>;
};

export type TastingUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TastingUpdateInput;
  /** Unique document search */
  where: TastingWhereUniqueInput;
};

export type TastingUpsertInput = {
  /** Create document if it didn't exist */
  create: TastingCreateInput;
  /** Update document if it exists */
  update: TastingUpdateInput;
};

export type TastingUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TastingUpsertInput;
  /** Unique document search */
  where: TastingWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TastingWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TastingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TastingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TastingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TastingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bean?: InputMaybe<BeanWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  documentInStages_every?: InputMaybe<TastingWhereStageInput>;
  documentInStages_none?: InputMaybe<TastingWhereStageInput>;
  documentInStages_some?: InputMaybe<TastingWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  notes?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  notes_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  notes_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  notes_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  notes_not?: InputMaybe<Array<Scalars['String']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  recipe?: InputMaybe<CoffeeRecipeType>;
  /** All values that are contained in given list. */
  recipe_in?: InputMaybe<Array<InputMaybe<CoffeeRecipeType>>>;
  /** All values that are not equal to given value. */
  recipe_not?: InputMaybe<CoffeeRecipeType>;
  /** All values that are not contained in given list. */
  recipe_not_in?: InputMaybe<Array<InputMaybe<CoffeeRecipeType>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  score?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  score_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  score_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  score_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  score_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  score_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  score_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  score_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TastingWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TastingWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TastingWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TastingWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TastingWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Tasting record uniquely */
export type TastingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Thought = Node & {
  __typename?: 'Thought';
  body: ThoughtBodyRichText;
  cover?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Thought>;
  /** List of Thought versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  introduction?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Thought>;
  location?: Maybe<Location>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ThoughtCoverArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ThoughtCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ThoughtCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ThoughtDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ThoughtHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ThoughtLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ThoughtPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ThoughtPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ThoughtScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ThoughtUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ThoughtUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ThoughtBodyRichText = {
  __typename?: 'ThoughtBodyRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<ThoughtBodyRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type ThoughtBodyRichTextReferencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ThoughtBodyRichTextEmbeddedTypes = Asset | Idea | Thought;

export type ThoughtConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ThoughtWhereUniqueInput;
};

/** A connection to a list of items. */
export type ThoughtConnection = {
  __typename?: 'ThoughtConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ThoughtEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ThoughtCreateInput = {
  /** body input for default locale (en) */
  body: Scalars['RichTextAST'];
  cover?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** introduction input for default locale (en) */
  introduction?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ThoughtCreateLocalizationsInput>;
  location?: InputMaybe<LocationInput>;
  slug: Scalars['String'];
  /** title input for default locale (en) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ThoughtCreateLocalizationDataInput = {
  body: Scalars['RichTextAST'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  introduction?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ThoughtCreateLocalizationInput = {
  /** Localization input */
  data: ThoughtCreateLocalizationDataInput;
  locale: Locale;
};

export type ThoughtCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ThoughtCreateLocalizationInput>>;
};

export type ThoughtCreateManyInlineInput = {
  /** Connect multiple existing Thought documents */
  connect?: InputMaybe<Array<ThoughtWhereUniqueInput>>;
  /** Create and connect multiple existing Thought documents */
  create?: InputMaybe<Array<ThoughtCreateInput>>;
};

export type ThoughtCreateOneInlineInput = {
  /** Connect one existing Thought document */
  connect?: InputMaybe<ThoughtWhereUniqueInput>;
  /** Create and connect one Thought document */
  create?: InputMaybe<ThoughtCreateInput>;
};

/** An edge in a connection. */
export type ThoughtEdge = {
  __typename?: 'ThoughtEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Thought;
};

/** Identifies documents */
export type ThoughtManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ThoughtWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ThoughtWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ThoughtWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ThoughtWhereStageInput>;
  documentInStages_none?: InputMaybe<ThoughtWhereStageInput>;
  documentInStages_some?: InputMaybe<ThoughtWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ThoughtOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ThoughtUpdateInput = {
  /** body input for default locale (en) */
  body?: InputMaybe<Scalars['RichTextAST']>;
  cover?: InputMaybe<AssetUpdateOneInlineInput>;
  /** introduction input for default locale (en) */
  introduction?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ThoughtUpdateLocalizationsInput>;
  location?: InputMaybe<LocationInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type ThoughtUpdateLocalizationDataInput = {
  body?: InputMaybe<Scalars['RichTextAST']>;
  introduction?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ThoughtUpdateLocalizationInput = {
  data: ThoughtUpdateLocalizationDataInput;
  locale: Locale;
};

export type ThoughtUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ThoughtCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ThoughtUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ThoughtUpsertLocalizationInput>>;
};

export type ThoughtUpdateManyInlineInput = {
  /** Connect multiple existing Thought documents */
  connect?: InputMaybe<Array<ThoughtConnectInput>>;
  /** Create and connect multiple Thought documents */
  create?: InputMaybe<Array<ThoughtCreateInput>>;
  /** Delete multiple Thought documents */
  delete?: InputMaybe<Array<ThoughtWhereUniqueInput>>;
  /** Disconnect multiple Thought documents */
  disconnect?: InputMaybe<Array<ThoughtWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Thought documents */
  set?: InputMaybe<Array<ThoughtWhereUniqueInput>>;
  /** Update multiple Thought documents */
  update?: InputMaybe<Array<ThoughtUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Thought documents */
  upsert?: InputMaybe<Array<ThoughtUpsertWithNestedWhereUniqueInput>>;
};

export type ThoughtUpdateManyInput = {
  /** body input for default locale (en) */
  body?: InputMaybe<Scalars['RichTextAST']>;
  /** introduction input for default locale (en) */
  introduction?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ThoughtUpdateManyLocalizationsInput>;
  location?: InputMaybe<LocationInput>;
};

export type ThoughtUpdateManyLocalizationDataInput = {
  body?: InputMaybe<Scalars['RichTextAST']>;
  introduction?: InputMaybe<Scalars['String']>;
};

export type ThoughtUpdateManyLocalizationInput = {
  data: ThoughtUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ThoughtUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ThoughtUpdateManyLocalizationInput>>;
};

export type ThoughtUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ThoughtUpdateManyInput;
  /** Document search */
  where: ThoughtWhereInput;
};

export type ThoughtUpdateOneInlineInput = {
  /** Connect existing Thought document */
  connect?: InputMaybe<ThoughtWhereUniqueInput>;
  /** Create and connect one Thought document */
  create?: InputMaybe<ThoughtCreateInput>;
  /** Delete currently connected Thought document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Thought document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Thought document */
  update?: InputMaybe<ThoughtUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Thought document */
  upsert?: InputMaybe<ThoughtUpsertWithNestedWhereUniqueInput>;
};

export type ThoughtUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ThoughtUpdateInput;
  /** Unique document search */
  where: ThoughtWhereUniqueInput;
};

export type ThoughtUpsertInput = {
  /** Create document if it didn't exist */
  create: ThoughtCreateInput;
  /** Update document if it exists */
  update: ThoughtUpdateInput;
};

export type ThoughtUpsertLocalizationInput = {
  create: ThoughtCreateLocalizationDataInput;
  locale: Locale;
  update: ThoughtUpdateLocalizationDataInput;
};

export type ThoughtUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ThoughtUpsertInput;
  /** Unique document search */
  where: ThoughtWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ThoughtWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ThoughtWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ThoughtWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ThoughtWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ThoughtWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ThoughtWhereStageInput>;
  documentInStages_none?: InputMaybe<ThoughtWhereStageInput>;
  documentInStages_some?: InputMaybe<ThoughtWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  introduction_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ThoughtWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ThoughtWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ThoughtWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ThoughtWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ThoughtWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Thought record uniquely */
export type ThoughtWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CoffeePageQueryVariables = Exact<{ [key: string]: never; }>;


export type CoffeePageQuery = { __typename?: 'Query', favoriteBeans: Array<(
    { __typename?: 'Bean', id: string }
    & { ' $fragmentRefs'?: { 'BeanCardFragment': BeanCardFragment } }
  )>, latestBeans: Array<(
    { __typename?: 'Bean', id: string }
    & { ' $fragmentRefs'?: { 'BeanCardFragment': BeanCardFragment } }
  )>, favoritePlaces: Array<(
    { __typename?: 'CoffeePlace', id: string }
    & { ' $fragmentRefs'?: { 'CoffeePlaceCardFragment': CoffeePlaceCardFragment } }
  )>, latestPlaces: Array<(
    { __typename?: 'CoffeePlace', id: string }
    & { ' $fragmentRefs'?: { 'CoffeePlaceCardFragment': CoffeePlaceCardFragment } }
  )> };

export type BeanCardFragment = { __typename?: 'Bean', name: string, roaster: string, origin: string, process: string, espressoScore?: number | null, filterScore?: number | null, bagPicture?: { __typename?: 'Asset', url: string } | null } & { ' $fragmentName'?: 'BeanCardFragment' };

export type CoffeePlaceCardFragment = { __typename?: 'CoffeePlace', country: string, name: string, score?: number | null, visits: Array<any>, picture?: { __typename?: 'Asset', url: string } | null } & { ' $fragmentName'?: 'CoffeePlaceCardFragment' };

export type IdeaCardFragment = { __typename?: 'Idea', id: string, summary: string, description: string, targetPages: Array<Page>, targetComponents: Array<Component>, targetVersion: string, ideaStatus: Idea_Status, dependencies: Array<{ __typename?: 'Idea', id: string, summary: string }> } & { ' $fragmentName'?: 'IdeaCardFragment' };

export type PosterThumbnailFragment = { __typename?: 'Poster', slug: string, name: string, poster: { __typename?: 'Asset', url: string } } & { ' $fragmentName'?: 'PosterThumbnailFragment' };

export type PosterFullFragment = { __typename?: 'Poster', id: string, slug: string, name: string, description?: string | null, format?: PosterFormat | null, poster: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } } & { ' $fragmentName'?: 'PosterFullFragment' };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', posters: Array<{ __typename?: 'Poster', slug: string, name: string, poster: { __typename?: 'Asset', url: string } }>, beans: Array<(
    { __typename?: 'Bean', id: string }
    & { ' $fragmentRefs'?: { 'BeanCardFragment': BeanCardFragment } }
  )>, coffeePlaces: Array<(
    { __typename?: 'CoffeePlace', id: string }
    & { ' $fragmentRefs'?: { 'CoffeePlaceCardFragment': CoffeePlaceCardFragment } }
  )> };

export type IdeasQueryVariables = Exact<{
  activeIdeaId: Scalars['ID'];
}>;


export type IdeasQuery = { __typename?: 'Query', backlog: Array<(
    { __typename?: 'Idea' }
    & { ' $fragmentRefs'?: { 'IdeaCardFragment': IdeaCardFragment } }
  )>, planned: Array<(
    { __typename?: 'Idea' }
    & { ' $fragmentRefs'?: { 'IdeaCardFragment': IdeaCardFragment } }
  )>, ongoing: Array<(
    { __typename?: 'Idea' }
    & { ' $fragmentRefs'?: { 'IdeaCardFragment': IdeaCardFragment } }
  )>, testing: Array<(
    { __typename?: 'Idea' }
    & { ' $fragmentRefs'?: { 'IdeaCardFragment': IdeaCardFragment } }
  )>, done: Array<(
    { __typename?: 'Idea' }
    & { ' $fragmentRefs'?: { 'IdeaCardFragment': IdeaCardFragment } }
  )>, activeIdea?: (
    { __typename?: 'Idea' }
    & { ' $fragmentRefs'?: { 'IdeaCardFragment': IdeaCardFragment } }
  ) | null };

export type PostersQueryVariables = Exact<{ [key: string]: never; }>;


export type PostersQuery = { __typename?: 'Query', standard: Array<{ __typename?: 'Poster', slug: string, name: string, poster: { __typename?: 'Asset', url: string } }>, vinyl: Array<{ __typename?: 'Poster', slug: string, name: string, poster: { __typename?: 'Asset', url: string } }> };

export type PosterQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PosterQuery = { __typename?: 'Query', poster?: (
    { __typename?: 'Poster' }
    & { ' $fragmentRefs'?: { 'PosterFullFragment': PosterFullFragment } }
  ) | null };

export const BeanCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BeanCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bean"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bagPicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"roaster"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"process"}},{"kind":"Field","name":{"kind":"Name","value":"espressoScore"}},{"kind":"Field","name":{"kind":"Name","value":"filterScore"}}]}}]} as unknown as DocumentNode<BeanCardFragment, unknown>;
export const CoffeePlaceCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoffeePlaceCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CoffeePlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"visits"}}]}}]} as unknown as DocumentNode<CoffeePlaceCardFragment, unknown>;
export const IdeaCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IdeaCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Idea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dependencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetPages"}},{"kind":"Field","name":{"kind":"Name","value":"targetComponents"}},{"kind":"Field","name":{"kind":"Name","value":"targetVersion"}},{"kind":"Field","name":{"kind":"Name","value":"ideaStatus"}}]}}]} as unknown as DocumentNode<IdeaCardFragment, unknown>;
export const PosterThumbnailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PosterThumbnail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poster"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"640"}}]}}]}}]}}]}]}}]}}]} as unknown as DocumentNode<PosterThumbnailFragment, unknown>;
export const PosterFullFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PosterFull"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poster"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<PosterFullFragment, unknown>;
export const CoffeePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"coffeePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"favoriteBeans"},"name":{"kind":"Name","value":"beans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isFavorite"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeanCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"latestBeans"},"name":{"kind":"Name","value":"beans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeanCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"favoritePlaces"},"name":{"kind":"Name","value":"coffeePlaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isFavorite"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoffeePlaceCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"latestPlaces"},"name":{"kind":"Name","value":"coffeePlaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"visits_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoffeePlaceCard"}}]}}]}},...BeanCardFragmentDoc.definitions,...CoffeePlaceCardFragmentDoc.definitions]} as unknown as DocumentNode<CoffeePageQuery, CoffeePageQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"8"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"A3"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"beans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BeanCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coffeePlaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"8"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"visits_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoffeePlaceCard"}}]}}]}},...BeanCardFragmentDoc.definitions,...CoffeePlaceCardFragmentDoc.definitions]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const IdeasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ideas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activeIdeaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"backlog"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"PENDING"}},{"kind":"ObjectField","name":{"kind":"Name","value":"targetVersion"},"value":{"kind":"StringValue","value":"TBD","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"planned"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"PENDING"}},{"kind":"ObjectField","name":{"kind":"Name","value":"targetVersion_not"},"value":{"kind":"StringValue","value":"TBD","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ongoing"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"IN_PROGRESS"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"testing"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"TESTING"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"done"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"DONE"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"activeIdea"},"name":{"kind":"Name","value":"idea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activeIdeaId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}}]}},...IdeaCardFragmentDoc.definitions]} as unknown as DocumentNode<IdeasQuery, IdeasQueryVariables>;
export const PostersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"standard"},"name":{"kind":"Name","value":"posters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"A3"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"vinyl"},"name":{"kind":"Name","value":"posters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"VINYL"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"poster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<PostersQuery, PostersQueryVariables>;
export const PosterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Poster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PosterFull"}}]}}]}},...PosterFullFragmentDoc.definitions]} as unknown as DocumentNode<PosterQuery, PosterQueryVariables>;