import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {useGetProducts} from '../../hooks';

const Presenter = ({navigation}: Props) => {
  const {data: listProducts} = useGetProducts();

  return <Component listProducts={listProducts} />;
};

export default Presenter;
