import React from 'react';
import {Text, View} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const ErrorMessage = ({
  isVisible = false,
  containerStyles,
  label = '',
}: Props) =>
  isVisible ? (
    <View style={[styles.container, containerStyles]}>
      <Text testID={'labelError'} style={styles.error}>
        {label}
      </Text>
    </View>
  ) : null;
export default ErrorMessage;
