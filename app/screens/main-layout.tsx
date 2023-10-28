import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/organisms/header';
import {colors, metrics, sizes} from '../theme';
import useTab from '../contexts/tab-context';
import {constants, icons, images} from '../constants';
import {RootStackParamList} from '../navigation/type';
import TabButton from '../components/atoms/tab-button';
import Home from './home';
import Search from './search';
import Cart from './cart';
import Favourite from './favourite';
import Notification from './notification';

type Props = NativeStackScreenProps<RootStackParamList, 'MainLayout'>;

const MainLayout = ({navigation}: Props) => {
  const {selectedTab, setSelectedTab} = useTab();

  const flatListRef = useRef(null);

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(colors.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(colors.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(colors.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(colors.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(colors.white);

  const homeFlexStyle = useAnimatedStyle(() => {
    return {flex: homeTabFlex.value};
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: homeTabColor.value};
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return {flex: searchTabFlex.value};
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: searchTabColor.value};
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return {flex: cartTabFlex.value};
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: cartTabColor.value};
  });
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {flex: favouriteTabFlex.value};
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: favouriteTabColor.value};
  });

  const notificationFlexStyle = useAnimatedStyle(() => {
    return {flex: notificationTabFlex.value};
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: notificationTabColor.value};
  });

  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, [setSelectedTab]);

  useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming(colors.primary, {duration: 500});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming(colors.white, {duration: 500});
    }

    if (selectedTab === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = withTiming(4, {duration: 500});
      searchTabColor.value = withTiming(colors.primary, {duration: 500});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 500});
      searchTabColor.value = withTiming(colors.white, {duration: 500});
    }

    if (selectedTab === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      cartTabFlex.value = withTiming(4, {duration: 500});
      cartTabColor.value = withTiming(colors.primary, {duration: 500});
    } else {
      cartTabFlex.value = withTiming(1, {duration: 500});
      cartTabColor.value = withTiming(colors.white, {duration: 500});
    }

    if (selectedTab === constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      favouriteTabFlex.value = withTiming(4, {duration: 500});
      favouriteTabColor.value = withTiming(colors.primary, {duration: 500});
    } else {
      favouriteTabFlex.value = withTiming(1, {duration: 500});
      favouriteTabColor.value = withTiming(colors.white, {duration: 500});
    }

    if (selectedTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      notificationTabFlex.value = withTiming(4, {duration: 500});
      notificationTabColor.value = withTiming(colors.primary, {duration: 500});
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 500});
      notificationTabColor.value = withTiming(colors.white, {duration: 500});
    }
  }, [
    cartTabColor,
    cartTabFlex,
    favouriteTabColor,
    favouriteTabFlex,
    homeTabColor,
    homeTabFlex,
    notificationTabColor,
    notificationTabFlex,
    searchTabColor,
    searchTabFlex,
    selectedTab,
  ]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: colors.lightGray2,
      }}>
      {/* Header  */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: sizes.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.gray2,
              borderRadius: sizes.radius,
            }}
            onPress={() => navigation?.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: sizes.radius,
            }}>
            <Image
              source={images.profile}
              style={{width: 35, height: 35, borderRadius: sizes.radius}}
            />
          </TouchableOpacity>
        }
      />
      {/* Content  */}
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={metrics.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: metrics.height,
                  width: metrics.width,
                }}>
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.cart && <Cart />}
                {item.label === constants.screens.favourite && <Favourite />}
                {item.label === constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
      </View>
      {/* Footer  */}
      <View style={{height: 100, justifyContent: 'flex-end'}}>
        {/*  Shadow  */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[colors.transparent, colors.lightGray1]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />

        {/* Tabs  */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: sizes.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: colors.white,
          }}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab === constants.screens.search}
            onPress={() => setSelectedTab(constants.screens.search)}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === constants.screens.cart}
            onPress={() => setSelectedTab(constants.screens.cart)}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() => setSelectedTab(constants.screens.favourite)}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => setSelectedTab(constants.screens.notification)}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default MainLayout;
