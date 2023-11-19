import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
};
