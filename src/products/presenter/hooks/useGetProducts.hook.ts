import {useQuery} from '@tanstack/react-query';
import injections from '../injections';
import {REQUEST_ID} from '../constants';
import {ProductEntity} from '@src/products/domain/models';

const useGetProducts = () =>
  useQuery<ProductEntity[], Error>([REQUEST_ID.getProducts], () =>
    injections.productUseCase.getProducts(),
  );

export default useGetProducts;
