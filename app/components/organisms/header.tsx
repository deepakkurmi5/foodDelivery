import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import {fonts} from '../../theme';

const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}: {
  title: string;
  containerStyle: ViewStyle | undefined;
  leftComponent?: any;
  rightComponent?: any;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Left  */}
      {leftComponent}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...fonts.h3}}>{title}</Text>
      </View>
      {/* Title  */}
      {/* Right  */}
      {rightComponent}
    </View>
  );
};

export default Header;
