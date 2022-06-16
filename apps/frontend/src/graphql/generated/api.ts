import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<Book>;
  addPaste?: Maybe<Paste>;
};


export type MutationAddBookArgs = {
  title: Scalars['String'];
};


export type MutationAddPasteArgs = {
  content: Scalars['String'];
  hasPassword: Scalars['Boolean'];
  password?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Paste = {
  __typename?: 'Paste';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  passwordHash?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  paste?: Maybe<Paste>;
  pastes?: Maybe<Array<Maybe<Paste>>>;
};


export type QueryBookArgs = {
  id: Scalars['Int'];
};


export type QueryPasteArgs = {
  id: Scalars['Int'];
  password?: InputMaybe<Scalars['String']>;
};

export type GetPasteListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPasteListsQuery = { __typename?: 'Query', pastes?: Array<{ __typename?: 'Paste', id?: number | null, title?: string | null, hasPassword?: boolean | null, createdAt?: any | null } | null> | null };


export const GetPasteLists = gql`
    query GetPasteLists {
  pastes {
    id
    title
    hasPassword
    createdAt
  }
}
    `;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    

export const GetPasteListsDocument = gql`
    query GetPasteLists {
  pastes {
    id
    title
    hasPassword
    createdAt
  }
}
    `;

/**
 * __useGetPasteListsQuery__
 *
 * To run a query within a Vue component, call `useGetPasteListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPasteListsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPasteListsQuery();
 */
export function useGetPasteListsQuery(options: VueApolloComposable.UseQueryOptions<GetPasteListsQuery, GetPasteListsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPasteListsQuery, GetPasteListsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPasteListsQuery, GetPasteListsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPasteListsQuery, GetPasteListsQueryVariables>(GetPasteListsDocument, {}, options);
}
export function useGetPasteListsLazyQuery(options: VueApolloComposable.UseQueryOptions<GetPasteListsQuery, GetPasteListsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPasteListsQuery, GetPasteListsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPasteListsQuery, GetPasteListsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPasteListsQuery, GetPasteListsQueryVariables>(GetPasteListsDocument, {}, options);
}
export type GetPasteListsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPasteListsQuery, GetPasteListsQueryVariables>;