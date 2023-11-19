import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type ButtonTypes = 'gray_light' | 'red' | 'yellow';

export type Props = {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  disabled?: boolean;
  type?: ButtonTypes;
  onPress?: () => void;
};
