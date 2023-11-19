import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle, Text} from 'react-native';
import {Props} from './models';
import {styles} from './styles';
import {COLORS} from '@common/presenter/theme';

const colors = COLORS.common;

const Button = ({
  type = 'yellow',
  containerStyles,
  textStyle,
  text = '',
  disabled = false,
  onPress,
}: Props) => {
  const stylesButton: StyleProp<ViewStyle> = [
    styles.container,
    {backgroundColor: colors[type]},
    containerStyles,
  ];

  return (
    <TouchableOpacity
      testID="container"
      activeOpacity={0.5}
      disabled={disabled}
      style={stylesButton}
      onPress={onPress}>
      <Text style={[styles.label, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
