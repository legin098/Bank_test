import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  testID?: string;
  isVisible?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  label?: string;
};
