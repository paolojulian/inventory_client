import MainLayout from '@/components/layouts/MainLayout';
import { AppText, AppTextInput } from '@/components/shared';
import {
  AppPager,
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(PRODUCT_MOCKS.length / itemsPerPage);

  // Get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = PRODUCT_MOCKS.slice(startIndex, endIndex);

  return (
    <MainLayout>
      <div className='flex items-center gap-2 mt-2 mb-8'>
        <AppTextInput
          id='search'
          label='Search'
          variant='rounded'
          onChangeText={(text) => console.log(text)}
        />
      </div>

      <div className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
        <AppTable className='w-full'>
          <AppTableHead>
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
            {currentItems.map((product) => (
              <AppTableRow
                key={product.id}
                variant={product.isActive ? 'default' : 'disabled'}
              >
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

        <AppPager
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
