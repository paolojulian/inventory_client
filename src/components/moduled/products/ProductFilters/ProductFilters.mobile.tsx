import { AppTextInputSm } from '@/components/shared';
import { AdjustmentsHorizontalIcon } from '@/components/shared/icons';

const ProductFiltersMobile = () => {
  return (
    <div className='flex flex-col gap-2 sm:gap-4 my-2'>
      <section id='filters-name'>
        <div className='flex flex-row items-center gap-1'>
          <AppTextInputSm
            id='search'
            placeholder='Search by Name/SKU'
            variant='rounded'
          />
          <div className='aspect-square p-3 bg-white border border-neutral-200 rounded-lg'>
            <AdjustmentsHorizontalIcon />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductFiltersMobile;
