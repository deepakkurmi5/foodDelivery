import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {colors, fonts, sizes} from '../theme';
import {constants, dummyData, icons, images} from '../constants';
import CustomDrawerItem from './custom-drawer-item';

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
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: sizes.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={images.profile}
            style={{
              height: 50,
              width: 50,
              borderRadius: sizes.radius,
            }}
          />
          <View style={{marginLeft: sizes.radius}}>
            <Text style={{color: colors.white, ...fonts.h3}}>
              {dummyData?.myProfile?.name}
            </Text>
            <Text style={{color: colors.white, ...fonts.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer items */}
        <View style={{flex: 1, marginTop: sizes.padding}}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />

          {/* live devider */}
          <View
            style={{
              height: 1,
              marginVertical: sizes.radius,
              marginLeft: sizes.radius,
              backgroundColor: colors.lightGray1,
            }}
          />
          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: sizes.padding,
          }}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
