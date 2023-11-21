import {useContext} from 'react';
import {ModalLoadingContext} from '../context';

const useVisibleModalLoading = () => useContext(ModalLoadingContext);
export default useVisibleModalLoading;
