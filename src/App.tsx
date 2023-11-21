import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@common/presenter/navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {LogBox} from 'react-native';
import {ModalLoadingProvider} from './common/presenter/context';

const queryClient = new QueryClient();

const App = () => {
  LogBox.ignoreLogs([
    'Sending `onAnimatedValueUpdate` with no listeners registered', // TODO: Remove when fixed
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <ModalLoadingProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ModalLoadingProvider>
    </QueryClientProvider>
  );
};

export default App;
