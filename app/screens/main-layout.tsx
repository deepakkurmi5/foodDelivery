import {Text} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const MainLayout = ({drawerAnimationStyle}: {drawerAnimationStyle: any}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...drawerAnimationStyle,
      }}>
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
