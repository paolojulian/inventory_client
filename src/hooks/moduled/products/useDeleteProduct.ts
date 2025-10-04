import { ProductDeleteInt } from '@/interfaces/rest/products/product-delete';
import type { ProductListResponse } from '@/interfaces/rest/products/product-list';
import {
  type InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { ProductQueryKeys } from './products.query-keys';

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ProductDeleteInt,
    onSuccess: (_, variables) => {
      queryClient.setQueriesData(
        { queryKey: [ProductQueryKeys.list()] },
        (oldData: InfiniteData<ProductListResponse> | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              products: page.products.filter(
                (product) => product.id !== variables.id
              ),
            })),
          };
        }
      );
    },
  });
};
