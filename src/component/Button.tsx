import React, { ReactNode } from 'react';
import {
  Pressable,
  ViewStyle,
  GestureResponderEvent,
  Insets,
} from 'react-native';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import R from '../res/R';

interface ButtonComponentProps {
  style?: ViewStyle;
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  hitSlop?: number | Insets | null | undefined;
}

function BackButton({
  style = {},
  onPress = () => { },
  hitSlop = null,
}: ButtonComponentProps) {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <View
      center
      absT
      absR
      margin-5
      style={{
        backgroundColor: R.colours.tab_selected,
        borderColor: R.colours.tab_bg,
        borderRadius: 10,
      }}
    >

      <Pressable
        onPress={onPress} hitSlop={hitSlop || 0}
      >
        <View>
          <Text margin-10 light text50>
            Back
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default BackButton;
