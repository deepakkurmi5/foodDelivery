import {Text, TouchableWithoutFeedback, Image} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import Animated from 'react-native-reanimated';
import {colors, fonts, sizes} from '../../theme';

const TabButton = ({
  label,
  icon,
  isFocused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}: {
  label: string;
  icon: ImageSourcePropType;
  isFocused: boolean;
  onPress: () => void;
  outerContainerStyle: any;
  innerContainerStyle: any;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {flex: 1, alignItems: 'center', justifyContent: 'center'},
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? colors.white : colors.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: sizes.base,
                color: colors.white,
                ...fonts.h3,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;
