import type { Product } from '@/domain/product.domain';
import type { PagerOutput } from '@/interfaces/rest.types';
import { ProductAddInt } from '@/interfaces/rest/products/product-add';
import {
  type InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { ProductQueryKeys } from './products.query-keys';

type ProductListResponse = {
  message: string;
  products: Product[];
  pager: PagerOutput;
};

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ProductAddInt,
    onSuccess: (response) => {
      const addedProduct = response.product;

      queryClient.setQueriesData(
        { queryKey: [ProductQueryKeys.list()] },
        (oldData: InfiniteData<ProductListResponse> | undefined) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              products: [addedProduct, ...page.products],
            })),
          };
        }
      );
    },
  });
};

export default useAddProduct;
