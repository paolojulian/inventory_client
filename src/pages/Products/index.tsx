import MainLayout from '@/components/layouts/MainLayout';
import AddProduct from '@/components/moduled/products/AddProduct';
import EditProduct from '@/components/moduled/products/EditProduct';
import ProductFilters from '@/components/moduled/products/ProductFilters';
import ProductList from '@/components/moduled/products/ProductList';
import ViewProduct from '@/components/moduled/products/ViewProduct';
import PageHeader from '@/components/shared/PageHeader';
import { useGetProductList } from '@/hooks/moduled/products';
import { useProductStore } from '@/stores/product.store';
import { PRODUCT_MOCKS } from '@/tests/mocks/product.mock';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(PRODUCT_MOCKS.length / itemsPerPage);

  const { data, isPending, error } = useGetProductList({
    pager: {
      page: currentPage,
      size: itemsPerPage,
    },
  });
  console.log({ data, isPending, error });

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
      <ViewProduct />

      <MainLayout>
        <PageHeader title='Products' shouldHideBack shouldHideKebab />

        <section id='products-page-filters' className='mt-2'>
          <ProductFilters />
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
