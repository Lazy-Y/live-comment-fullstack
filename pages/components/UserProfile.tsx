import React from 'react';
import { ChangeEvent, useState } from 'react';
import { useFragment, graphql } from 'react-relay';
import { UserProfile__User$key } from './__generated__/UserProfile__User.graphql';
import { AppQueryLoader } from './AppContainer';

interface Props {
  userRef?: UserProfile__User$key | null;
  loadQuery: AppQueryLoader;
}

const UserProfile = ({ userRef = null, loadQuery }: Props) => {
  const user = useFragment(
    graphql`
      fragment UserProfile__User on User {
        id
        userName
      }
    `,
    userRef,
  );

  const [inputValue, onInputChange] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '' || parseInt(value) > 0) {
      onInputChange(value);
    }
  };

  return (
    <div>
      <h1>User</h1>
      <input
        type="text"
        name="name"
        placeholder="User ID"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <button
        disabled={inputValue === ''}
        onClick={() => loadQuery({ id: inputValue })}
      >
        Switch User
      </button>
      <br />
      <label>Current User: {user?.userName}</label>
    </div>
  );
};

export default UserProfile;
