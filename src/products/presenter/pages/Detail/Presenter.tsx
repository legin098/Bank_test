import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {useDeleteProduct} from '../../hooks';
import {ErrorHandler} from '@src/core/utils';

const Presenter = ({navigation, route}: Props) => {
  const {params} = route;

  const {mutateAsync: deleteProduct} = useDeleteProduct();

  const handleOnDelete = async (productID: string) => {
    try {
      await deleteProduct({productID});
      navigation.navigate('Home');
    } catch (error) {
      ErrorHandler.catch(error);
    }
  };

  return <Component product={params} onDelete={handleOnDelete} />;
};

export default Presenter;
