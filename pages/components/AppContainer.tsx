import React from 'react';
import {
  AppContainerQuery,
  AppContainerQueryResponse,
  AppContainerQueryVariables,
} from './__generated__/AppContainerQuery.graphql';
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
  UseQueryLoaderLoadQueryOptions,
} from 'react-relay';
import UserProfile from './UserProfile';
import PostContainer from './PostContainer';

export type AppQueryLoader = (
  variables: AppContainerQueryVariables,
  options?: UseQueryLoaderLoadQueryOptions | undefined,
) => void;

const query = graphql`
  query AppContainerQuery($id: ID!) {
    user(id: $id) {
      ...UserProfile__User
      # ...PostComposer__User
    }
  }
`;

interface Props {
  queryRef: PreloadedQuery<AppContainerQuery>;
  loadQuery: AppQueryLoader;
}

interface AppProps {
  userRef?: AppContainerQueryResponse['user'] | null;
  loadQuery: AppQueryLoader;
}

const AppWrapper = (props: AppProps) => (
  <>
    <UserProfile {...props} />
    <PostContainer
      userRef={
        // props?.userRef ??
        null
      }
    />
  </>
);

const AppRenderer = ({ queryRef, loadQuery }: Props) => {
  const data = usePreloadedQuery<AppContainerQuery>(query, queryRef);
  return <AppWrapper userRef={data?.user} loadQuery={loadQuery} />;
};

const AppContainer = () => {
  const [queryRef, loadQuery] = useQueryLoader<AppContainerQuery>(query);

  if (queryRef == null) {
    return <AppWrapper loadQuery={loadQuery} />;
  }

  return <AppRenderer queryRef={queryRef} loadQuery={loadQuery} />;
};

export default AppContainer;
