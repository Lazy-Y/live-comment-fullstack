import React from 'react';
import { Suspense } from 'react';
import PostList from './PostList';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
const App = () => {
  console.log('render app');
  return (
    <>
      <div>hello app</div>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'loading...'}>
          <PostList />
        </Suspense>
      </RelayEnvironmentProvider>
    </>
  );
};

export default App;
