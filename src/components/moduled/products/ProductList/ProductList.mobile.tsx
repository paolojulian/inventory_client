import type { ProductListCommonProps } from '@/components/moduled/products/ProductList/ProductList.types';
import { AppText } from '@/components/shared';
import AppPill from '@/components/shared/AppPill';
import { ChevronRightIcon } from '@/components/shared/icons';
import { formatMoney } from '@/utils/money';

type Props = ProductListCommonProps;

const ProductListMobile = ({ items }: Props) => {
  return (
    <div className='flex flex-col gap-2 rounded-2xl'>
      {items.map((item) => (
        <div
          key={item.id}
          className='bg-white p-4 border border-neutral-200 rounded-lg'
        >
          <div className='flex flex-row items-start justify-between'>
            <div>
              <AppText>
                #{item.id} {item.name}
              </AppText>
              <AppText className='text-neutral-500 uppercase' variant={'small'}>
                SKU: {item.sku}
              </AppText>
            </div>
            <ChevronRightIcon className='size-4' />
          </div>
          <div className='flex flex-row items-end justify-between mt-4'>
            <AppPill
              variant={item.status === 'active' ? 'success' : 'danger'}
              title={item.status === 'active' ? 'Active' : 'Inactive'}
            />
            <AppText>{formatMoney(item.price.cents)}</AppText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListMobile;
