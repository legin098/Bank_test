import {useMutation, useQueryClient} from '@tanstack/react-query';
import injections from '../injections';
import {REQUEST_ID} from '../constants';
import {ProductEntity} from '@src/products/domain/models';

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, ProductEntity>(
    [REQUEST_ID.updateProducts],
    data => injections.productUseCase.updateProduct(data),
    {
      onSuccess: async () => {
        await Promise.all([
          queryClient.invalidateQueries([REQUEST_ID.getProducts]),
        ]);
      },
    },
  );
};

export default useUpdateProduct;
