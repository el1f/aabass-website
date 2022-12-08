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
export type AssetCoverThoughtArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
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
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
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
  cafeCoffee?: InputMaybe<CoffeeUpdateManyInlineInput>;
  coverThought?: InputMaybe<ThoughtUpdateManyInlineInput>;
  drinkCoffee?: InputMaybe<CoffeeUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
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
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeeCafeArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CoffeeDrinkArgs = {
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
  locales?: InputMaybe<Array<Locale>>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaDependenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
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
  locales?: InputMaybe<Array<Locale>>;
};


/** The concepts that I want to develop further in the website. */
export type IdeaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
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
  /** Create one idea */
  createIdea?: Maybe<Idea>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one thought */
  createThought?: Maybe<Thought>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
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
   * Delete many Idea documents
   * @deprecated Please use the new paginated many mutation (deleteManyIdeasConnection)
   */
  deleteManyIdeas: BatchPayload;
  /** Delete many Idea documents, return deleted documents */
  deleteManyIdeasConnection: IdeaConnection;
  /**
   * Delete many Thought documents
   * @deprecated Please use the new paginated many mutation (deleteManyThoughtsConnection)
   */
  deleteManyThoughts: BatchPayload;
  /** Delete many Thought documents, return deleted documents */
  deleteManyThoughtsConnection: ThoughtConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one thought from _all_ existing stages. Returns deleted document. */
  deleteThought?: Maybe<Thought>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
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
   * Publish many Idea documents
   * @deprecated Please use the new paginated many mutation (publishManyIdeasConnection)
   */
  publishManyIdeas: BatchPayload;
  /** Publish many Idea documents */
  publishManyIdeasConnection: IdeaConnection;
  /**
   * Publish many Thought documents
   * @deprecated Please use the new paginated many mutation (publishManyThoughtsConnection)
   */
  publishManyThoughts: BatchPayload;
  /** Publish many Thought documents */
  publishManyThoughtsConnection: ThoughtConnection;
  /** Publish one thought */
  publishThought?: Maybe<Thought>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one idea */
  schedulePublishIdea?: Maybe<Idea>;
  /** Schedule to publish one thought */
  schedulePublishThought?: Maybe<Thought>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one idea from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishIdea?: Maybe<Idea>;
  /** Unpublish one thought from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishThought?: Maybe<Thought>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
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
   * Unpublish many Idea documents
   * @deprecated Please use the new paginated many mutation (unpublishManyIdeasConnection)
   */
  unpublishManyIdeas: BatchPayload;
  /** Find many Idea documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyIdeasConnection: IdeaConnection;
  /**
   * Unpublish many Thought documents
   * @deprecated Please use the new paginated many mutation (unpublishManyThoughtsConnection)
   */
  unpublishManyThoughts: BatchPayload;
  /** Find many Thought documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyThoughtsConnection: ThoughtConnection;
  /** Unpublish one thought from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishThought?: Maybe<Thought>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
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
   * Update many ideas
   * @deprecated Please use the new paginated many mutation (updateManyIdeasConnection)
   */
  updateManyIdeas: BatchPayload;
  /** Update many Idea documents */
  updateManyIdeasConnection: IdeaConnection;
  /**
   * Update many thoughts
   * @deprecated Please use the new paginated many mutation (updateManyThoughtsConnection)
   */
  updateManyThoughts: BatchPayload;
  /** Update many Thought documents */
  updateManyThoughtsConnection: ThoughtConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one thought */
  updateThought?: Maybe<Thought>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one idea */
  upsertIdea?: Maybe<Idea>;
  /** Upsert one thought */
  upsertThought?: Maybe<Thought>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateIdeaArgs = {
  data: IdeaCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateThoughtArgs = {
  data: ThoughtCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
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


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
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


export type MutationSchedulePublishIdeaArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: IdeaWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
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


export type MutationScheduleUnpublishIdeaArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IdeaWhereUniqueInput;
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


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateThoughtArgs = {
  data: ThoughtUpdateInput;
  where: ThoughtWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertIdeaArgs = {
  upsert: IdeaUpsertInput;
  where: IdeaWhereUniqueInput;
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
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
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
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Idea | Thought;

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
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
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
  locales?: InputMaybe<Array<Locale>>;
};


export type ThoughtCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ThoughtCreatedByArgs = {
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
  locales?: InputMaybe<Array<Locale>>;
};


export type ThoughtScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ThoughtUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ThoughtUpdatedByArgs = {
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

export type IdeaCardFragment = { __typename?: 'Idea', id: string, summary: string, description: string, targetPages: Array<Page>, targetComponents: Array<Component>, targetVersion: string, ideaStatus: Idea_Status, dependencies: Array<{ __typename?: 'Idea', id: string, summary: string }> } & { ' $fragmentName'?: 'IdeaCardFragment' };

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

export const IdeaCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IdeaCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Idea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dependencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetPages"}},{"kind":"Field","name":{"kind":"Name","value":"targetComponents"}},{"kind":"Field","name":{"kind":"Name","value":"targetVersion"}},{"kind":"Field","name":{"kind":"Name","value":"ideaStatus"}}]}}]} as unknown as DocumentNode<IdeaCardFragment, unknown>;
export const IdeasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ideas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activeIdeaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"backlog"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"PENDING"}},{"kind":"ObjectField","name":{"kind":"Name","value":"targetVersion"},"value":{"kind":"StringValue","value":"TBD","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"planned"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"PENDING"}},{"kind":"ObjectField","name":{"kind":"Name","value":"targetVersion_not"},"value":{"kind":"StringValue","value":"TBD","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ongoing"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"IN_PROGRESS"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"testing"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"TESTING"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"done"},"name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaStatus"},"value":{"kind":"EnumValue","value":"DONE"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"activeIdea"},"name":{"kind":"Name","value":"idea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activeIdeaId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IdeaCard"}}]}}]}},...IdeaCardFragmentDoc.definitions]} as unknown as DocumentNode<IdeasQuery, IdeasQueryVariables>;