import {StackScreenProps} from '@react-navigation/stack';
import {ProductStackParamList} from '@src/common/presenter/models';
import {ProductEntity} from '@src/products/domain/models';

export type PropsPresenter = StackScreenProps<ProductStackParamList, 'Detail'>;

export type PropsComponent = {
  testID?: string;
  product?: ProductEntity;
  onDelete(productID: string): void;
  onNavigation(screen: keyof ProductStackParamList, params?: any): void;
};
