import {StyleProp, TextInputProps, ViewStyle} from 'react-native';
import {IErrorType} from '@common/presenter/models';

export interface Props extends TextInputProps {
  containerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<ViewStyle>;
  label?: string;
  value?: string;
  error?: IErrorType;
}
