import { AppRadioPill, AppText, AppTextInputSm } from '@/components/shared';
import type { FilterStatus } from '@/pages/Products';

type Props = {
  status: FilterStatus;
  setStatus: (status: FilterStatus) => void;
};

const ProductFilters = ({ setStatus, status }: Props) => {
  return (
    <div className='flex flex-col gap-2 sm:gap-4 mt-2 mb-8'>
      <section id='filters-name'>
        <AppTextInputSm
          id='search'
          placeholder='Search by Name/SKU'
          variant='rounded'
        />
      </section>

      <section id='filters-status' className='flex items-center gap-4'>
        <AppText className='text-gray-500'>Status:</AppText>

        <AppRadioPill
          label='All'
          id='all'
          name='status'
          value={'all' satisfies FilterStatus}
          checked={status === 'all'}
          onChange={(e) => setStatus(e.target.value as FilterStatus)}
        />

        <AppRadioPill
          label='Active'
          id='active'
          name='status'
          value={'active' satisfies FilterStatus}
          checked={status === 'active'}
          onChange={(e) => setStatus(e.target.value as FilterStatus)}
        />

        <AppRadioPill
          label='Inactive'
          id='inactive'
          name='status'
          value={'inactive' satisfies FilterStatus}
          checked={status === 'inactive'}
          onChange={(e) => setStatus(e.target.value as FilterStatus)}
        />
      </section>

      <section id='filters-price-range'>
        <AppText className='text-gray-500'>Price</AppText>
        <div className='flex flex-row items-center gap-2'>
          <AppTextInputSm
            id='price-range-min'
            placeholder='Min'
            variant='rounded'
            type='number'
          />
          <span>-</span>
          <AppTextInputSm
            id='price-range-max'
            placeholder='Max'
            variant='rounded'
            type='number'
          />
        </div>
      </section>
    </div>
  );
};

export default ProductFilters;
