import React from 'react';
import { graphql, useFragment } from 'react-relay';
import { PostItem__Post$key } from './__generated__/PostItem__Post.graphql';

interface Props {
  postRef: PostItem__Post$key;
}

const PostItem = ({ postRef }: Props) => {
  const post = useFragment(
    graphql`
      fragment PostItem__Post on Post {
        id
        user {
          userName
        }
        content
      }
    `,
    postRef,
  );
  const { id, user, content } = post;
  return (
    <li key={id}>
      {user.userName}: {content}
    </li>
  );
};

export default PostItem;
