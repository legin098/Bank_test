import {StackScreenProps} from '@react-navigation/stack';
import {ProductStackParamList} from '@src/common/presenter/models';

export type PropsPresenter = StackScreenProps<ProductStackParamList, 'Add'>;

export type PropsComponent = {
  testID?: string;
  onNavigation(screen: keyof ProductStackParamList, params?: any): void;
};
