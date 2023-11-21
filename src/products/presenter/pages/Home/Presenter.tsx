import React, {useEffect} from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {useGetProducts} from '../../hooks';
import {useVisibleModalLoading} from '@src/common/presenter/hooks';

const Presenter = ({navigation}: Props) => {
  const {setIsVisible} = useVisibleModalLoading();

  const {data: listProducts, isLoading} = useGetProducts();

  const handleVisibleModalLoading = async (isVisible: boolean) => {
    setTimeout(() => {
      setIsVisible(isVisible);
    }, 500);
  };

  useEffect(() => {
    handleVisibleModalLoading(isLoading);
  }, [isLoading]);

  return (
    <Component
      listProducts={listProducts}
      onNavigation={(screen, params) => navigation.navigate(screen, params)}
    />
  );
};

export default Presenter;
