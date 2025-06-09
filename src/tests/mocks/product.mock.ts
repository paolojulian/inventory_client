import {
  NewTestProduct,
  type ProductMock,
} from '@/tests/mocks/product.factory';

export const PRODUCT_MOCKS = [
  NewTestProduct(),
  {
    ...NewTestProduct(),
    name: 'Butter Fingers',
    sku: 'butter-fingers--md',
  },
  {
    ...NewTestProduct(),
    name: 'Inactive Product 1',
    sku: 'inactive-product-1',
    isActive: false,
  },
  {
    ...NewTestProduct(),
    name: 'Inactive Product 2',
    sku: 'inactive-product-2',
    isActive: false,
  },
  NewTestProduct(),
  {
    ...NewTestProduct(),
    name: 'Special Product',
    sku: 'special-product--lg',
    price: 49999,
  },
  NewTestProduct(),
  {
    ...NewTestProduct(),
    name: 'Inactive Product 3',
    sku: 'inactive-product-3',
    isActive: false,
  },
  NewTestProduct(),
] satisfies ProductMock[];
