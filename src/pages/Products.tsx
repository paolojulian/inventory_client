import MainLayout from '@/components/layouts/MainLayout';
import { AppRadioPill, AppText, AppTextInputSm } from '@/components/shared';
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
type FilterStatus = 'all' | 'active' | 'inactive';

const ProductsPage = () => {
  const [status, setStatus] = useState<FilterStatus>('all');
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
        <div className='bg-white  overflow-hidden'>
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
                sortType={
                  sort[0] === 'price' ? sort[1] ?? 'default' : 'default'
                }
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
      </section>
    </MainLayout>
  );
};

export default ProductsPage;
