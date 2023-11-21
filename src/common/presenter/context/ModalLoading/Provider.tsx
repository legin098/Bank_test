import React, {useState} from 'react';
import Context from './Context';
import {PropsProvider as Props} from './models';

const ProviderContext = ({children}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const defaultValue = {
    isVisible,
    setIsVisible: (value: boolean) => setIsVisible(value),
  };
  return <Context.Provider value={defaultValue}>{children}</Context.Provider>;
};

export default ProviderContext;
