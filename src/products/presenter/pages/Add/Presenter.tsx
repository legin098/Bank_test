import React, {useState} from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {ProductEntity} from '@src/products/domain/models';
import {IErrorType} from '@src/common/presenter/models';
import {INITIAL_STATE_ERROR} from '@src/core/constants';
import {ErrorHandler} from '@src/core/utils';

const Presenter = ({navigation}: Props) => {
  const [error, setError] = useState<IErrorType>(INITIAL_STATE_ERROR);

  const handleOnSubmit = (data: ProductEntity) => {
    try {
      console.log({data});
    } catch (error) {
      setError({isVisible: true, label: ErrorHandler.catch(error)[0]});
    }
  };

  return (
    <Component
      onSubmit={handleOnSubmit}
      onNavigation={(screen, params) => navigation.navigate(screen, params)}
    />
  );
};

export default Presenter;
