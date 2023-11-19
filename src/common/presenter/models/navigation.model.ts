import {ProductEntity} from '@src/products/domain/models';

export type ProductStackParamList = {
  Home?: undefined;
  Detail?: ProductEntity;
};

export type MainStackParamList = {
  Products: ProductStackParamList;
};
