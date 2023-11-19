import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {useGetProducts} from '../../hooks';

const Presenter = ({navigation}: Props) => {
  const {data: listProducts} = useGetProducts();

  return (
    <Component
      onNavigation={(screen, params) => navigation.navigate(screen, params)}
    />
  );
};

export default Presenter;
