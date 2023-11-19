import React from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';

const Presenter = ({navigation, route}: Props) => {
  const {params} = route;

  return <Component product={params} />;
};

export default Presenter;
