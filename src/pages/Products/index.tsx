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
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
  const [selectedEditProduct, setSelectedEditProduct] = useProductStore(
    useShallow((state) => [
      state.selectedEditProduct,
      state.setSelectedEditProduct,
    ])
  );
  const filters = useProductStore((state) => state.filters);

  const {
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    currentPage,
    totalPages,
  } = useGetProductList({
    filter: {
      is_active:
        filters.status === 'all' ? undefined : filters.status === 'active',
      search_text: filters.search,
    },
  });

  const handleCloseEditProduct = () => setSelectedEditProduct(null);

  const selectedProductToEdit = useMemo(() => {
    return (
      products.find(({ id }) => {
        return id === selectedEditProduct?.id;
      }) || null
    );
  }, [products, selectedEditProduct]);

  return (
    <>
      <EditProduct
        key={selectedProductToEdit?.id}
        onClose={handleCloseEditProduct}
        product={selectedProductToEdit}
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
