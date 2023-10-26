/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Root from './app/navigation';
import {TabProvider} from './app/contexts/tab-context';

function App(): JSX.Element {
  return (
    <TabProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaProvider>
    </TabProvider>
  );
}

export default App;
