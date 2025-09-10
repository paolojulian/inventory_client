import type { ProductListCommonProps } from '@/components/moduled/products/ProductList/ProductList.types';
import ProductRowKebabMenu from '@/components/moduled/products/ProductRowKebabMenu';
import { AppText } from '@/components/shared';
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
import { formatMoney } from '@/utils/money';

type Props = ProductListCommonProps;

const ProductListDesktop = ({
  onEditProduct,
  onSort,
  setCurrentPage,
  currentPage,
  items,
  sort,
  totalPages,
}: Props) => {
  return (
    <div className='bg-white'>
      <AppTable className='w-full'>
        <AppTableHead>
          <AppTableRow>
            <AppTableHeaderSortable
              sortType={sort[0] === 'name' ? sort[1] ?? 'default' : 'default'}
              onClickSort={(sortType) => onSort(['name', sortType])}
            >
              Name
            </AppTableHeaderSortable>
            <AppTableHeaderSortable
              sortType={sort[0] === 'sku' ? sort[1] ?? 'default' : 'default'}
              onClickSort={(sortType) => onSort(['sku', sortType])}
            >
              SKU
            </AppTableHeaderSortable>
            <AppTableHeader width={380}>Description</AppTableHeader>
            <AppTableHeaderSortable
              sortType={sort[0] === 'price' ? sort[1] ?? 'default' : 'default'}
              onClickSort={(sortType) => onSort(['price', sortType])}
              className='text-center'
            >
              Price
            </AppTableHeaderSortable>
            <AppTableHeader className='text-center'>Actions</AppTableHeader>
          </AppTableRow>
        </AppTableHead>

        <AppTableBody>
          {items.map((product) => (
            <AppTableRow
              key={product.id}
              variant={product.status === 'active' ? 'default' : 'disabled'}
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
                <AppText>{formatMoney(product.price.cents)}</AppText>
              </AppTableData>
              <AppTableData className='text-center'>
                <ProductRowKebabMenu
                  onEditProduct={onEditProduct}
                  product={product}
                />
              </AppTableData>
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
  );
};

export default ProductListDesktop;
