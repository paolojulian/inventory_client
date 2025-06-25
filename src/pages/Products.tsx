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
import AppTableHeaderSortable from '@/components/shared/AppTable/AppTableHeaderSortable';
import { PRODUCT_MOCKS } from '@/tests/mocks/product.mock';
import { formatMoney } from '@/utils/money';
import { useState } from 'react';

type SortTypes = 'asc' | 'desc' | 'default';
type SortBy = 'name' | 'sku' | 'price';

const ProductsPage = () => {
  const [sort, setSort] = useState<[SortBy | null, SortTypes | null]>([
    null,
    null,
  ]);

  return (
    <MainLayout>
      <AppTable className='w-full'>
        <AppTableHead>
          {/* <AppTableHeader width={80}>ID</AppTableHeader> */}
          <AppTableHeaderSortable
            sortType={sort[0] === 'name' ? sort[1] ?? 'default' : 'default'}
            onClickSort={(sortType) => setSort(['name', sortType])}
          >
            Name
          </AppTableHeaderSortable>
          <AppTableHeaderSortable
            sortType={sort[0] === 'sku' ? sort[1] ?? 'default' : 'default'}
            onClickSort={(sortType) => setSort(['sku', sortType])}
          >
            SKU
          </AppTableHeaderSortable>
          <AppTableHeader width={380}>Description</AppTableHeader>
          <AppTableHeaderSortable
            sortType={sort[0] === 'price' ? sort[1] ?? 'default' : 'default'}
            onClickSort={(sortType) => setSort(['price', sortType])}
            className='text-center'
          >
            Price
          </AppTableHeaderSortable>
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
