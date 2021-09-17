import { ChangeEvent, useState } from 'react';
import { graphql, useFragment, useMutation } from 'react-relay';
import { PostComposer__User$key } from './__generated__/PostComposer__User.graphql';

interface Props {
  userRef: PostComposer__User$key;
  connectionID: string;
}

const PostComposer = ({ userRef, connectionID }: Props) => {
  const user = useFragment(
    graphql`
      fragment PostComposer__User on User {
        id
      }
    `,
    userRef,
  );

  const [commit, inFlight] = useMutation(graphql`
    mutation PostComposerCreateMutation(
      $userID: ID!
      $content: String!
      $connections: [ID!]!
    ) {
      createPost(userID: $userID, content: $content) {
        edge @prependEdge(connections: $connections) {
          node {
            ...PostItem__Post
          }
          cursor
        }
      }
    }
  `);

  const [inputValue, onInputChange] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return (
    <>
      <h2>Write Post</h2>
      <textarea
        placeholder="Write Your Post"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <button
        disabled={inFlight}
        onClick={() => {
          commit({
            variables: {
              userID: user.id,
              content: inputValue,
              connections: [connectionID],
            },
          });
        }}
      >
        Submit
      </button>
    </>
  );
};

export default PostComposer;
