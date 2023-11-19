import {StackScreenProps} from '@react-navigation/stack';
import {ProductStackParamList} from '@src/common/presenter/models';

export type PropsPresenter = StackScreenProps<ProductStackParamList, 'Home'>;

export type PropsComponent = {
  testID?: string;
  listProducts?: any[];
};
