import type { ProductListCommonProps } from '@/components/moduled/products/ProductList/ProductList.types';
import { AppText } from '@/components/shared';
import { AppPager } from '@/components/shared/AppTable';
import { formatMoney } from '@/utils/money';

type Props = ProductListCommonProps;

const ProductListMobile = ({
  currentPage,
  totalPages,
  setCurrentPage,
  items,
}: Props) => {
  return (
    <div className='flex flex-col gap-2 rounded-2xl'>
      <AppPager
        currentPage={currentPage}
        totalPages={totalPages}
        showPageNumbers={false}
        onPageChange={setCurrentPage}
      />
      {items.map((item) => (
        <div key={item.id} className='bg-white p-4 border border-neutral-400'>
          <AppText className='text-neutral-600'>
            #{item.id} {item.name}
          </AppText>
          <AppText>{formatMoney(item.price.cents)}</AppText>
          <AppText className='text-neutral-500 mt-2' variant={'small'}>
            SKU: {item.sku}
          </AppText>
        </div>
      ))}
      <AppPager
        currentPage={currentPage}
        totalPages={totalPages}
        showPageNumbers={false}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductListMobile;
