import {Text, TouchableOpacity, Image} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../theme';

const CustomDrawerItem = ({
  label,
  icon,
  isFocus,
  onPress,
}: {
  isFocus?: boolean;
  label: string;
  icon: ImageSourcePropType;
  onPress?: any;
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: sizes.base,
        alignItems: 'center',
        paddingLeft: sizes.base,
        borderRadius: sizes.base,
        backgroundColor: isFocus ? colors.transparentBlack1 : undefined,
      }}
      onPress={onPress}>
      <Image
        source={icon}
        style={{width: 20, height: 20, tintColor: colors.white}}
      />
      <Text style={{marginLeft: 15, color: colors.white, ...fonts.h3}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
