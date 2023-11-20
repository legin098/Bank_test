import {useMutation} from '@tanstack/react-query';
import injections from '../injections';
import {REQUEST_ID} from '../constants';

const useVerificationProduct = () =>
  useMutation<boolean, Error, {productID: string}>(
    [REQUEST_ID.verificationProduct],
    ({productID}) => injections.productUseCase.verificationProduct(productID),
  );

export default useVerificationProduct;
