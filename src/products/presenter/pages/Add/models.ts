import {StackScreenProps} from '@react-navigation/stack';
import {ProductStackParamList} from '@src/common/presenter/models';
import {ProductEntity} from '@src/products/domain/models';

export type PropsPresenter = StackScreenProps<ProductStackParamList, 'Add'>;

export type PropsComponent = {
  testID?: string;
  hasExistProduct?: boolean;
  onVerify(productID: string): void;
  onSubmit(data: ProductEntity): void;
};
