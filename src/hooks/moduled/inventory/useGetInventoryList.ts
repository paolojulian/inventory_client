import { InventoryQueryKeys } from '@/hooks/moduled/inventory/inventory.query-keys';
import { InventoryListInt } from '@/interfaces/rest/inventory/inventory-list';
import { useInfiniteQuery } from '@tanstack/react-query';

const PAGE_SIZE = 20;

export const useGetInventoryList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: [InventoryQueryKeys.list()],
      queryFn: ({ pageParam }) => {
        return InventoryListInt({
          pager: {
            page: pageParam,
            size: PAGE_SIZE,
          },
        });
      },
      getNextPageParam: (lastPage) => {
        const { current_page, total_pages } = lastPage.pager;

        return current_page < total_pages ? current_page + 1 : undefined;
      },
    });

  return {
    data,
    inventory: data?.pages.flatMap((page) => page.stocks) ?? [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    currentPage: data?.pages[data.pages.length - 1]?.pager.current_page ?? 1,
    totalPages: data?.pages[data.pages.length - 1]?.pager.total_pages ?? 1,
  };
};
