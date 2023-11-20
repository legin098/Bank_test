import {StackScreenProps} from '@react-navigation/stack';
import {ProductStackParamList} from '@src/common/presenter/models';
import {ProductEntity} from '@src/products/domain/models';

export type PropsPresenter = StackScreenProps<ProductStackParamList, 'Edit'>;

export type PropsComponent = {
  testID?: string;
  product?: ProductEntity;
  onSubmit(data: ProductEntity): void;
};
