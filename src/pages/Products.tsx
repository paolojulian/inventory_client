import MainLayout from '@/components/layouts/MainLayout';
import AddProduct from '@/components/moduled/products/AddProduct';
import EditProduct from '@/components/moduled/products/EditProduct';
import ProductFilters from '@/components/moduled/products/ProductFilters';
import ProductList from '@/components/moduled/products/ProductList';
import PageHeader from '@/components/shared/PageHeader';
import { useProductStore } from '@/stores/product.store';
import { PRODUCT_MOCKS } from '@/tests/mocks/product.mock';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
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
        <PageHeader title='Products' />

        <section id='products-page-filters'>
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
