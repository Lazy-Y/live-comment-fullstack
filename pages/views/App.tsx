import React from 'react';
import { Suspense } from 'react';
import AppContainer from '../components/AppContainer';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
const App = () => {
  return (
    <>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'loading...'}>
          <AppContainer />
        </Suspense>
      </RelayEnvironmentProvider>
    </>
  );
};

export default App;
