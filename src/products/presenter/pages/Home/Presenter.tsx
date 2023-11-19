import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';

const Presenter = ({}: Props) => {
  return <Component listProducts={[]} />;
};

export default Presenter;
