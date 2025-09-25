import {
  AppButton,
  AppChip,
  AppText,
  AppTextInputSm,
  BottomSheetModal,
} from '@/components/shared';
import { AdjustmentsHorizontalIcon } from '@/components/shared/icons';
import { useDebounce } from '@/hooks/useDebounce';
import { useProductStore } from '@/stores/product.store';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

const ProductFiltersMobile = () => {
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [status, updateStatusFilter] = useProductStore(
    useShallow((state) => [state.filters.status, state.updateStatusFilter])
  );
  const [search, setSearchText] = useProductStore(
    useShallow((state) => [state.filters.search, state.setSearchText])
  );
  const [localSearch, setLocalSearch] = useState(search);

  const { priceRange, updatePriceRangeMaxFilter, updatePriceRangeMinFilter } =
    useProductStore(
      useShallow((state) => ({
        priceRange: state.filters.priceRange,
        updatePriceRangeMinFilter: state.updatePriceRangeMinFilter,
        updatePriceRangeMaxFilter: state.updatePriceRangeMaxFilter,
      }))
    );

  const debouncedSearchTerm = useDebounce(localSearch, 300);

  useEffect(() => {
    setSearchText(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchText]);

  const handleClose = () => setIsFiltering(false);
  const handleReset = () => {
    updateStatusFilter('all');
    updatePriceRangeMinFilter(undefined);
    updatePriceRangeMaxFilter(undefined);
    handleClose();
  };
  const handleToggleFilter = () => setIsFiltering((prev) => !prev);
  const handleSubmitFilter = () => setIsFiltering(false);

  return (
    <>
      <div className='flex flex-col gap-2 sm:gap-4 my-2'>
        <section id='filters-name'>
          <div className='flex flex-row items-center gap-1'>
            <AppTextInputSm
              onChange={(e) => setLocalSearch(e.target.value)}
              id='search'
              placeholder='Search by Name/SKU'
              variant='rounded'
              value={localSearch}
            />
            <button
              className='aspect-square p-3 bg-white border border-neutral-200 rounded-lg active:scale-95'
              onClick={handleToggleFilter}
            >
              <AdjustmentsHorizontalIcon />
            </button>
          </div>
        </section>
      </div>
      <BottomSheetModal onClose={handleClose} isOpen={isFiltering}>
        <div className='w-screen p-4 space-y-4'>
          <section id='filters-status'>
            <AppText className='text-gray-500'>Status:</AppText>

            <div className='flex items-center gap-2 flex-wrap'>
              <AppChip
                label='All'
                isSelected={status === 'all'}
                onClick={() => updateStatusFilter('all')}
              />
              <AppChip
                label='Active'
                isSelected={status === 'active'}
                onClick={() => updateStatusFilter('active')}
              />
              <AppChip
                label='Inactive'
                isSelected={status === 'inactive'}
                onClick={() => updateStatusFilter('inactive')}
              />
            </div>
          </section>
          <section id='filters-price-range'>
            <AppText className='text-gray-500'>Price</AppText>
            <div className='flex flex-row items-center gap-2'>
              <AppTextInputSm
                onChange={(e) =>
                  updatePriceRangeMinFilter(Number(e.target.value))
                }
                id='price-range-min'
                placeholder='Min'
                variant='rounded'
                type='number'
                value={priceRange.min || ''}
              />
              <span>-</span>
              <AppTextInputSm
                onChange={(e) =>
                  updatePriceRangeMaxFilter(Number(e.target.value))
                }
                id='price-range-max'
                placeholder='Max'
                variant='rounded'
                type='number'
                value={priceRange.max || ''}
              />
            </div>
          </section>
          <div className='space-y-2 mt-2'>
            <AppButton onClick={handleReset} isFullWidth variant='ghost'>
              <AppText>Reset</AppText>
            </AppButton>
            <AppButton onClick={handleSubmitFilter} isFullWidth>
              <AppText>Apply Filters</AppText>
            </AppButton>
          </div>
        </div>
      </BottomSheetModal>
    </>
  );
};

export default ProductFiltersMobile;
