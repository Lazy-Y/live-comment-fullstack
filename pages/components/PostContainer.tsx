import React from 'react';
import PostList from './PostList';
// import { PostComposer__User$key } from './__generated__/PostComposer__User.graphql';

interface Props {
  userRef: // PostComposer__User$key |
  null;
}

const PostContainer = ({ userRef }: Props) => {
  return (
    <>
      <h1>Posts</h1>
      <PostList userRef={userRef} />
    </>
  );
};

export default PostContainer;
