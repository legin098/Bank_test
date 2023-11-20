import {StackScreenProps} from '@react-navigation/stack';
import {ProductStackParamList} from '@src/common/presenter/models';
import {ProductEntity} from '@src/products/domain/models';

export type PropsPresenter = StackScreenProps<ProductStackParamList, 'Add'>;

export type PropsComponent = {
  testID?: string;
  onSubmit(data: ProductEntity): void;
  onNavigation(screen: keyof ProductStackParamList, params?: any): void;
};
