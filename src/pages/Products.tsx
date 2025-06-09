import MainLayout from '@/components/layouts/MainLayout';
import { AppText } from '@/components/shared';
import {
  AppTable,
  AppTableBody,
  AppTableData,
  AppTableHead,
  AppTableHeader,
  AppTableRow,
} from '@/components/shared/AppTable';
import { PRODUCT_MOCKS } from '@/tests/mocks/product.mock';

const ProductsPage = () => {
  return (
    <MainLayout>
      <AppTable className='w-full'>
        <AppTableHead>
          {/* <AppTableHeader width={80}>ID</AppTableHeader> */}
          <AppTableHeader width={300}>Name</AppTableHeader>
          <AppTableHeader width={300}>SKU</AppTableHeader>
          <AppTableHeader width={380}>Description</AppTableHeader>
          <AppTableHeader className='text-center'>Price</AppTableHeader>
          <AppTableHeader className='text-center'>Actions</AppTableHeader>
        </AppTableHead>

        <AppTableBody>
          {PRODUCT_MOCKS.map((product) => (
            <AppTableRow variant={product.isActive ? 'default' : 'disabled'}>
              {/* <AppTableData>{product.id}</AppTableData> */}
              <AppTableData>
                <AppText>{product.name}</AppText>
              </AppTableData>
              <AppTableData>
                <AppText>{product.sku}</AppText>
              </AppTableData>
              <AppTableData>
                <AppText>{product.description}</AppText>
              </AppTableData>
              <AppTableData className='text-center'>
                <AppText>{product.price}</AppText>
              </AppTableData>
              <AppTableData className='text-center'></AppTableData>
            </AppTableRow>
          ))}
        </AppTableBody>
      </AppTable>
    </MainLayout>
  );
};

export default ProductsPage;
