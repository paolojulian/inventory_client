import { ProductQueryKeys } from '@/hooks/moduled/products/products.query-keys';
import {
  ProductListInt,
  type ProductListParams,
} from '@/interfaces/rest/products/product-list';
import { useInfiniteQuery } from '@tanstack/react-query';

const PAGE_SIZE = 20;

export const useGetProductList = ({
  filter,
}: {
  filter: ProductListParams['filter'];
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: [
        ProductQueryKeys.list(),
        {
          filter,
        },
      ],
      queryFn: ({ pageParam }) => {
        return ProductListInt({
          pager: {
            page: pageParam,
            size: PAGE_SIZE,
          },
          filter,
        });
      },
      getNextPageParam: (lastPage) => {
        const { current_page, total_pages } = lastPage.pager;

        return current_page < total_pages ? current_page + 1 : undefined;
      },
    });

  return {
    data,
    products: data?.pages.flatMap((page) => page.products) ?? [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    currentPage: data?.pages[data.pages.length - 1]?.pager.current_page ?? 1,
    totalPages: data?.pages[data.pages.length - 1]?.pager.total_pages ?? 1,
  };
};
