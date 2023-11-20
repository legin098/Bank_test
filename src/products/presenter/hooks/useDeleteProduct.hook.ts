import {useMutation, useQueryClient} from '@tanstack/react-query';
import injections from '../injections';
import {REQUEST_ID} from '../constants';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, {productID: string}>(
    [REQUEST_ID.deleteProduct],
    ({productID}) => injections.productUseCase.deleteProduct(productID),
    {
      onSuccess: async () => {
        await Promise.all([
          queryClient.invalidateQueries([REQUEST_ID.getProducts]),
        ]);
      },
    },
  );
};

export default useDeleteProduct;
