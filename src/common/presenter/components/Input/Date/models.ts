import {StyleProp, ViewStyle} from 'react-native';
import {IErrorType} from '@common/presenter/models';

export type Props = {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
  value?: string;
  editable?: boolean;
  label?: string;
  dateFormat?: string;
  placeholder?: string;
  error?: IErrorType;
  onChange: (value: string) => void;
};

export type PropsInput = {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
  value?: string;
  label?: string;
  placeholder?: string;
  error?: IErrorType;
  onPress?: () => void;
};

export type PropsModalPicker = {
  testID?: string;
  isVisible?: boolean;
  value?: string;
  onChange: (value: string) => void;
  onClose: () => void;
};
