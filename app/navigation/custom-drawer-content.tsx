import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {colors, sizes} from '../theme';
import {icons} from '../constants';

const CustomDrawerContent = ({navigation}: {navigation: any}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: sizes.radius,
        }}>
        {/* Close */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: colors.white,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        {/* Drawer items */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
