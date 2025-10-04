import type { ProductListResponse } from '@/interfaces/rest/products/product-list';
import { ProductUpdateInt } from '@/interfaces/rest/products/product-update';
import {
  type InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { ProductQueryKeys } from './products.query-keys';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ProductUpdateInt,
    onSuccess: (response) => {
      // Extract the updated product from the response
      const updatedProduct = response.product;

      // Update all product list queries that contain this product
      queryClient.setQueriesData(
        { queryKey: [ProductQueryKeys.list()] },
        (oldData: InfiniteData<ProductListResponse> | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              products: page.products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
              ),
            })),
          };
        }
      );
    },
  });
};
