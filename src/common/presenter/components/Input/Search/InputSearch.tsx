import React from 'react';
import {View, TextInput} from 'react-native';
import {PropsInputSearch as Props} from './models';
import {stylesInputSearch as styles} from './styles';
import {COLORS} from '@src/common/presenter/theme';

const InputSearch = ({
  containerStyles,
  value = '',
  placeholder,
  onChangeText,
  onBlur,
}: Props) => {
  return (
    <View testID="container" style={[styles.container, containerStyles]}>
      <TextInput
        testID="input"
        style={styles.input}
        {...(placeholder && {
          placeholder: placeholder || '',
        })}
        placeholderTextColor={COLORS.common.gray}
        keyboardType={'web-search'}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputSearch;
