import {View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {colors} from '../theme';
import MainLayout from '../screens/main-layout';
import CustomDrawerContent from './custom-drawer-content';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Drawer.Navigator
        initialRouteName="MainLayout"
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout" component={MainLayout} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
