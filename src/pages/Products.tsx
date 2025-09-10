import MainLayout from '@/components/layouts/MainLayout';
import AddProduct from '@/components/moduled/products/AddProduct';
import EditProduct from '@/components/moduled/products/EditProduct';
import ProductList from '@/components/moduled/products/ProductList';
import { AppRadioPill, AppText, AppTextInputSm } from '@/components/shared';
import { useProductStore } from '@/stores/product.store';
import { PRODUCT_MOCKS } from '@/tests/mocks/product.mock';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
  const [status, setStatus] = useState<FilterStatus>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(PRODUCT_MOCKS.length / itemsPerPage);

  // Get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = PRODUCT_MOCKS.slice(startIndex, endIndex);

  const [selectedEditProduct, setSelectedEditProduct] = useProductStore(
    useShallow((state) => [
      state.selectedEditProduct,
      state.setSelectedEditProduct,
    ])
  );

  const handleCloseEditProduct = () => setSelectedEditProduct(null);

  return (
    <>
      <EditProduct
        key={selectedEditProduct?.id}
        onClose={handleCloseEditProduct}
        product={selectedEditProduct}
      />

      <MainLayout>
        <section id='products-page-filters'>
          <div className='flex flex-col gap-4 mt-2 mb-8'>
            <AppTextInputSm
              id='search'
              placeholder='Search by Name/SKU'
              variant='rounded'
            />

            <div className='flex items-center gap-4'>
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
            </div>
          </div>
        </section>

        <section id='products-page-table'>
          <ProductList
            onEditProduct={setSelectedEditProduct}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            items={currentItems}
            totalPages={totalPages}
          />
        </section>

        <AddProduct />
      </MainLayout>
    </>
  );
};

export default ProductsPage;
