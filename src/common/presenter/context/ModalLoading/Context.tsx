import {createContext} from 'react';
import {PropsContext as Props} from './models';

const Context = createContext<Props>({
  isVisible: false,
  setIsVisible: () => {},
});

export default Context;
