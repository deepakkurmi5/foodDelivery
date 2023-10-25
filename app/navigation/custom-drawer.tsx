import {View} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import {colors} from '../theme';
import MainLayout from '../screens/main-layout';
import CustomDrawerContent from './custom-drawer-content';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const progress = useDrawerProgress();

  console.log('progress', progress);

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

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
        <Drawer.Screen name="MainLayout">
          {props => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
