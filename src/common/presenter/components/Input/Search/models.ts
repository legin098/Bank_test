import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export interface PropsInputSearch extends TextInputProps {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
}
