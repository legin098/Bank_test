import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {ProductEntity} from '@src/products/domain/models';
import {ErrorHandler} from '@src/core/utils';
import {useAddProduct, useVerificationProduct} from '../../hooks';

const Presenter = ({navigation}: Props) => {
  const {mutateAsync: addProduct} = useAddProduct();
  const {mutateAsync: verificationProduct, data: hasExistProduct} =
    useVerificationProduct();

  const handleOnSubmit = async (data: ProductEntity) => {
    try {
      await addProduct(data);
      navigation.navigate('Home');
    } catch (error) {
      ErrorHandler.catch(error);
    }
  };

  const hanleOnVerify = async (productID: string) => {
    try {
      await verificationProduct({productID});
    } catch (error) {
      ErrorHandler.catch(error);
    }
  };

  return (
    <Component
      hasExistProduct={hasExistProduct}
      onVerify={hanleOnVerify}
      onSubmit={handleOnSubmit}
    />
  );
};

export default Presenter;
