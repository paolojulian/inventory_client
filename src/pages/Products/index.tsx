import MainLayout from '@/components/layouts/MainLayout';
import AddProduct from '@/components/moduled/products/AddProduct';
import EditProduct from '@/components/moduled/products/EditProduct';
import ProductFilters from '@/components/moduled/products/ProductFilters';
import ProductList from '@/components/moduled/products/ProductList';
import ViewProduct from '@/components/moduled/products/ViewProduct';
import { InfiniteScroll } from '@/components/shared';
import PageHeader from '@/components/shared/PageHeader';
import { useGetProductList } from '@/hooks/moduled/products';
import { useProductStore } from '@/stores/product.store';
import { useShallow } from 'zustand/react/shallow';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
  const {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    currentPage,
    totalPages,
  } = useGetProductList();

  const [selectedEditProduct, setSelectedEditProduct] = useProductStore(
    useShallow((state) => [
      state.selectedEditProduct,
      state.setSelectedEditProduct,
    ])
  );

  console.log({ hasNextPage, isFetchingNextPage });

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
        <div className='mt-2'>
          <PageHeader title='Products' shouldHideBack shouldHideKebab />
        </div>

        <section id='products-page-filters' className='mt-2'>
          <ProductFilters />
        </section>

        <section id='products-page-table'>
          <InfiniteScroll
            useWindow
            onLoadMore={fetchNextPage}
            hasNextPage={hasNextPage}
            isLoading={isFetchingNextPage}
          >
            <ProductList
              onEditProduct={setSelectedEditProduct}
              setCurrentPage={() => {}}
              currentPage={currentPage}
              items={products}
              totalPages={totalPages}
            />
          </InfiniteScroll>
        </section>

        <AddProduct />
      </MainLayout>
    </>
  );
};

export default ProductsPage;
