import React from 'react';
import { useMemo } from 'react';
import {
  graphql,
  useLazyLoadQuery,
  usePaginationFragment,
  useSubscription,
} from 'react-relay';
import PostComposer from './PostComposer';
import PostItem from './PostItem';
import { PostComposer__User$key } from './__generated__/PostComposer__User.graphql';
import { PostListPaginationQuery } from './__generated__/PostListPaginationQuery.graphql';
import { PostListQuery } from './__generated__/PostListQuery.graphql';
import { PostList_Query$key } from './__generated__/PostList_Query.graphql';

const PAGE_COUNT = 3;

interface Props {
  userRef: PostComposer__User$key | null;
}

const PostList = ({ userRef }: Props) => {
  const queryRef = useLazyLoadQuery<PostListQuery>(
    graphql`
      query PostListQuery($cursor: String, $count: Int) {
        ...PostList_Query @arguments(cursor: $cursor, count: $count)
      }
    `,
    { count: PAGE_COUNT },
  );

  const { data, loadNext, hasNext } = usePaginationFragment<
    PostListPaginationQuery,
    PostList_Query$key
  >(
    graphql`
      fragment PostList_Query on Query
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 3 }
        cursor: { type: "String" }
      )
      @refetchable(queryName: "PostListPaginationQuery") {
        queryPosts(after: $cursor, first: $count)
          @connection(key: "PostList_queryPosts") {
          __id
          edges {
            node {
              id
              ...PostItem__Post
              content
            }
          }
        }
      }
    `,
    queryRef,
  );

  //   const config = useMemo(
  //     () => ({
  //       subscription: graphql`
  //         subscription PostListSubscription($connections: [ID!]!) {
  //           postAdded {
  //             edge @prependEdge(connections: $connections) {
  //               node {
  //                 ...PostItem__Post
  //               }
  //               cursor
  //             }
  //           }
  //         }
  //       `,
  //       variables: {
  //         connections: [data.queryPosts.__id],
  //       },
  //     }),
  //     [data.queryPosts.__id],
  //   );

  //   useSubscription(config);

  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {userRef && (
        <PostComposer userRef={userRef} connectionID={data.queryPosts.__id} />
      )}
      <br />
      <h2>All Posts</h2>
      <>
        {data.queryPosts?.edges?.map(({ node }) => (
          <PostItem key={node.id} postRef={node} />
        ))}
      </>
      <button disabled={!hasNext} onClick={() => loadNext(PAGE_COUNT)}>
        Load More
      </button>
    </>
  );
};

export default PostList;
