import {ProductEntity} from '@src/products/domain/models';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  testID?: string;
  containerStyles?: StyleProp<ViewStyle>;
  product: ProductEntity;
  onPress: () => void;
};
