import { useQueryClient } from '@tanstack/react-query';
import { ProductQueryKeys } from './products.query-keys';
import type { Product } from '@/domain/product.domain';
import type { PagerOutput } from '@/interfaces/rest.types';
import type { InfiniteData } from '@tanstack/react-query';

type ProductListResponse = {
  message: string;
  products: Product[];
  pager: PagerOutput;
};

export const useFindProductInCache = (productId: string | null) => {
  const queryClient = useQueryClient();

  if (!productId) return null;

  // Get all cached product list queries
  const queries = queryClient.getQueriesData({
    queryKey: [ProductQueryKeys.list()],
  });

  // Search through all cached product lists to find the product
  for (const [, data] of queries) {
    const infiniteData = data as InfiniteData<ProductListResponse> | undefined;
    if (!infiniteData?.pages) continue;

    for (const page of infiniteData.pages) {
      const product = page.products.find((p) => p.id === productId);
      if (product) return product;
    }
  }

  return null;
};