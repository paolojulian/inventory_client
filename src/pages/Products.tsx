import MainLayout from '@/components/layouts/MainLayout';
import { AppText } from '@/components/shared';
import {
  AppTable,
  AppTableBody,
  AppTableData,
  AppTableHead,
  AppTableRow,
} from '@/components/shared/AppTable';
import AppTableHeaderSortable from '@/components/shared/AppTable/AppTableHeaderSortable';
import { PRODUCT_MOCKS } from '@/tests/mocks/product.mock';
import { formatMoney } from '@/utils/money';

const ProductsPage = () => {
  return (
    <MainLayout>
      <AppTable className='w-full'>
        <AppTableHead>
          {/* <AppTableHeader width={80}>ID</AppTableHeader> */}
          <AppTableHeaderSortable>Name</AppTableHeaderSortable>
          <AppTableHeaderSortable>SKU</AppTableHeaderSortable>
          <AppTableHeaderSortable width={380}>
            Description
          </AppTableHeaderSortable>
          <AppTableHeaderSortable className='text-center'>
            Price
          </AppTableHeaderSortable>
          <AppTableHeaderSortable className='text-center'>
            Actions
          </AppTableHeaderSortable>
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
                <AppText className='line-clamp-3'>
                  {product.description}
                </AppText>
              </AppTableData>
              <AppTableData className='text-center'>
                <AppText>{formatMoney(product.price)}</AppText>
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
