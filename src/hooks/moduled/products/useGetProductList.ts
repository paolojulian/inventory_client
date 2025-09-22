import { ProductQueryKeys } from '@/hooks/moduled/products/products.query-keys';
import type { PagerInput } from '@/interfaces/rest.types';
import { ProductListInt } from '@/interfaces/rest/products/product-list';
import { useQuery } from '@tanstack/react-query';

type Props = {
  pager: PagerInput;
};

export const useGetProductList = ({ pager }: Props) => {
  return useQuery({
    queryKey: [ProductQueryKeys.list(pager)],
    queryFn: () => ProductListInt({ pager }),
  });
};
