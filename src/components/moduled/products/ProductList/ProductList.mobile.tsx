import type { ProductListCommonProps } from '@/components/moduled/products/ProductList/ProductList.types';
import { AppText } from '@/components/shared';
import AppPill from '@/components/shared/AppPill';
import { ChevronRightIcon } from '@/components/shared/icons';
import type { Product } from '@/domain/product.domain';
import { useProductStore } from '@/stores/product.store';
import { formatMoney } from '@/utils/money';

type Props = ProductListCommonProps;

const ProductListMobile = ({ items }: Props) => {
  const setSelectedViewProduct = useProductStore(
    (state) => state.setSelectedViewProduct
  );

  const handleSelectProduct = (product: Product) => () =>
    setSelectedViewProduct(product);

  return (
    <div className='flex flex-col gap-2 rounded-2xl'>
      {items.map((item) => (
        <div
          key={item.id}
          className='bg-white p-4 border border-neutral-200 rounded-lg'
          onClick={handleSelectProduct(item)}
        >
          <div className='flex flex-row items-start justify-between'>
            <div>
              <AppText>{item.name}</AppText>
              <AppText className='text-neutral-500 uppercase' variant={'small'}>
                SKU: {item.sku}
              </AppText>
            </div>
            <ChevronRightIcon className='size-4' />
          </div>
          <div className='flex flex-row items-end justify-between mt-4'>
            <AppPill
              variant={item.is_active ? 'success' : 'danger'}
              title={item.is_active ? 'Active' : 'Inactive'}
            />
            <AppText>{formatMoney(item.price.cents)}</AppText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListMobile;
