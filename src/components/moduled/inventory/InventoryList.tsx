import { AppText, InfiniteScroll } from '@/components/shared';
import { ChevronRightIcon } from '@/components/shared/icons';
import { useGetInventoryList } from '@/hooks/moduled/inventory';

const InventoryList = () => {
  const { inventory, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetInventoryList();

  return (
    <InfiniteScroll
      useWindow
      onLoadMore={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isFetchingNextPage}
    >
      <div className='flex flex-col gap-2 rounded-2xl'>
        {inventory.map((item) => (
          <div
            key={item.product.id}
            className='bg-white p-4 border border-neutral-200 rounded-lg'
            // onClick={handleSelectProduct(item)}
          >
            <div className='flex flex-row items-start justify-between'>
              <div>
                <AppText>{item.product.name}</AppText>
                <AppText
                  className='text-neutral-500 uppercase'
                  variant={'small'}
                >
                  Stock: {item.stock}
                </AppText>
              </div>
              <ChevronRightIcon className='size-4' />
            </div>
            {/* <div className='flex flex-row items-end justify-between mt-4'>
              <AppPill
                variant={item.is_active ? 'success' : 'danger'}
                title={item.is_active ? 'Active' : 'Inactive'}
              />
              <AppText>{formatMoney(item.price.cents)}</AppText>
            </div> */}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InventoryList;
