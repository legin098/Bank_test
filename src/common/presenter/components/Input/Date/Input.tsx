import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ViewErrorMessage from '@common/presenter/components/View/ErrorMessage';
import {PropsInput as Props} from './models';
import {stylesInput as styles} from './styles';
import {INITIAL_STATE_ERROR} from '@src/core/constants';

const Input = ({
  containerStyles,
  label = '',
  placeholder = '',
  value = '',
  error = INITIAL_STATE_ERROR,
  onPress,
}: Props) => (
  <View testID="container" style={[styles.container, containerStyles]}>
    {label !== '' && <Text style={styles.label}>{label}</Text>}
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.ctnInput, error.isVisible && styles.errorInput]}
      onPress={onPress}>
      <View style={styles.ctnValue}>
        {!!value ? (
          <Text style={styles.value}>{value}</Text>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
      </View>
    </TouchableOpacity>
    <ViewErrorMessage
      testID="errorMessage"
      containerStyles={styles.ctnError}
      isVisible={error.isVisible}
      label={error?.label}
    />
  </View>
);

export default Input;
