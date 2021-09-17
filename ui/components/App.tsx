import { Suspense } from 'react';
import AppContainer from 'ui/components/AppContainer';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from 'ui/RelayEnvironment';
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
