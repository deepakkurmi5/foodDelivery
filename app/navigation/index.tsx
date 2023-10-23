import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CustomDrawer from './custom-drawer';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={CustomDrawer} />
    </Stack.Navigator>
  );
};

export default Root;
