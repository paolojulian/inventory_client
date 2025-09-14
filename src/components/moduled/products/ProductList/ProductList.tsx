import ProductListDesktop from '@/components/moduled/products/ProductList/ProductList.desktop';
import ProductListMobile from '@/components/moduled/products/ProductList/ProductList.mobile';
import type { ProductListCommonProps } from '@/components/moduled/products/ProductList/ProductList.types';
import type { SortBy, SortTypes } from '@/pages/Products';
import { useProductStore } from '@/stores/product.store';

type Props = Omit<ProductListCommonProps, 'sort' | 'onSort'>;

const ProductList = ({ ...commonProps }: Props) => {
  const filters = useProductStore((state) => state.filters);
  const updateFilters = useProductStore((state) => state.updateFilters);

  const handleSort = ([sortBy, sortOrder]: [
    sortBy: SortBy,
    sortOrder: SortTypes
  ]) => {
    updateFilters({
      sortBy,
      sortOrder,
    });
  };

  return (
    <>
      <div className='hidden sm:block'>
        <ProductListDesktop
          {...commonProps}
          onSort={handleSort}
          sort={[filters.sortBy, filters.sortOrder]}
        />
      </div>
      <div className='block sm:hidden'>
        <ProductListMobile
          {...commonProps}
          onSort={handleSort}
          sort={[filters.sortBy, filters.sortOrder]}
        />
      </div>
    </>
  );
};

export default ProductList;
