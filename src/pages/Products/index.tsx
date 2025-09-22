import MainLayout from '@/components/layouts/MainLayout';
import AddProduct from '@/components/moduled/products/AddProduct';
import EditProduct from '@/components/moduled/products/EditProduct';
import ProductFilters from '@/components/moduled/products/ProductFilters';
import ProductList from '@/components/moduled/products/ProductList';
import ViewProduct from '@/components/moduled/products/ViewProduct';
import PageHeader from '@/components/shared/PageHeader';
import { useGetProductList } from '@/hooks/moduled/products';
import { useProductStore } from '@/stores/product.store';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { products, pager } = useGetProductList({
    pager: {
      page: currentPage,
      size: itemsPerPage,
    },
  });

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
            currentPage={pager?.current_page || 1}
            items={products}
            totalPages={pager?.total_pages || 0}
          />
        </section>

        <AddProduct />
      </MainLayout>
    </>
  );
};

export default ProductsPage;
