import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {ProductEntity} from '@src/products/domain/models';
import {ErrorHandler} from '@src/core/utils';
import {useUpdateProduct} from '../../hooks';

const Presenter = ({navigation, route}: Props) => {
  const {params} = route;

  const {mutateAsync: updateProduct} = useUpdateProduct();

  const handleOnSubmit = async (data: ProductEntity) => {
    try {
      await updateProduct(data);
      navigation.navigate('Home');
    } catch (error) {
      ErrorHandler.catch(error);
    }
  };

  return <Component product={params} onSubmit={handleOnSubmit} />;
};

export default Presenter;
