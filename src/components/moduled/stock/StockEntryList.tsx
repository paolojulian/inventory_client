import { AppText } from '@/components/shared';
import AppPill from '@/components/shared/AppPill';
import {
  getStockEntryReasonPillVariant,
  getStockEntryReasonText,
  type StockEntry,
} from '@/domain/stock.domain';
import dayjs from 'dayjs';

const StockEntryList = () => {
  const items: StockEntry[] = [
    {
      created_at: '2025-01-15T10:30:00Z',
      id: '1',
      product: {
        id: 'prod_1',
        sku: 'siomai-001',
        name: 'Siomai',
        description: 'Delicious pork siomai',
        price: { cents: 5000 },
        is_active: true,
      },
      quantity_delta: 100,
      reason: 'restock',
      user: {
        id: 'user_1',
        first_name: 'Paolo',
        last_name: 'Julian',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-14T14:20:00Z',
      id: '2',
      product: {
        id: 'prod_2',
        sku: 'lumpiang-002',
        name: 'Lumpiang Shanghai',
        description: 'Crispy spring rolls',
        price: { cents: 8000 },
        is_active: true,
      },
      quantity_delta: -25,
      reason: 'sale',
      user: {
        id: 'user_1',
        first_name: 'Paolo',
        last_name: 'Julian',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-13T09:15:00Z',
      id: '3',
      product: {
        id: 'prod_3',
        sku: 'kwek-kwek-003',
        name: 'Kwek Kwek',
        description: 'Orange coated quail eggs',
        price: { cents: 3000 },
        is_active: true,
      },
      quantity_delta: -10,
      reason: 'damage',
      user: {
        id: 'user_2',
        first_name: 'Maria',
        last_name: 'Santos',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-12T16:45:00Z',
      id: '4',
      product: {
        id: 'prod_1',
        sku: 'siomai-001',
        name: 'Siomai',
        description: 'Delicious pork siomai',
        price: { cents: 5000 },
        is_active: true,
      },
      quantity_delta: 50,
      reason: 'transfer_in',
      user: {
        id: 'user_3',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-12T11:00:00Z',
      id: '5',
      product: {
        id: 'prod_4',
        sku: 'fishball-004',
        name: 'Fishball',
        description: 'Deep fried fish balls',
        price: { cents: 2500 },
        is_active: true,
      },
      quantity_delta: -30,
      reason: 'transfer_out',
      user: {
        id: 'user_3',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-11T08:30:00Z',
      id: '6',
      product: {
        id: 'prod_5',
        sku: 'kikiam-005',
        name: 'Kikiam',
        description: 'Filipino style pork sausage',
        price: { cents: 6000 },
        is_active: true,
      },
      quantity_delta: 5,
      reason: 'adjustment',
      user: {
        id: 'user_2',
        first_name: 'Maria',
        last_name: 'Santos',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2025-01-10T15:20:00Z',
      id: '7',
      product: {
        id: 'prod_2',
        sku: 'lumpiang-002',
        name: 'Lumpiang Shanghai',
        description: 'Crispy spring rolls',
        price: { cents: 8000 },
        is_active: true,
      },
      quantity_delta: 200,
      reason: 'restock',
      user: {
        id: 'user_1',
        first_name: 'Paolo',
        last_name: 'Julian',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2025-01-09T12:10:00Z',
      id: '8',
      product: {
        id: 'prod_3',
        sku: 'kwek-kwek-003',
        name: 'Kwek Kwek',
        description: 'Orange coated quail eggs',
        price: { cents: 3000 },
        is_active: true,
      },
      quantity_delta: -15,
      reason: 'sale',
      user: {
        id: 'user_1',
        first_name: 'Paolo',
        last_name: 'Julian',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2025-01-08T10:45:00Z',
      id: '9',
      product: {
        id: 'prod_1',
        sku: 'siomai-001',
        name: 'Siomai',
        description: 'Delicious pork siomai',
        price: { cents: 5000 },
        is_active: true,
      },
      quantity_delta: -5,
      reason: 'damage',
      user: {
        id: 'user_2',
        first_name: 'Maria',
        last_name: 'Santos',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-07T14:30:00Z',
      id: '10',
      product: {
        id: 'prod_6',
        sku: 'turon-006',
        name: 'Turon',
        description: 'Banana spring roll',
        price: { cents: 4000 },
        is_active: true,
      },
      quantity_delta: 75,
      reason: 'transfer_in',
      user: {
        id: 'user_3',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2025-01-06T09:00:00Z',
      id: '11',
      product: {
        id: 'prod_4',
        sku: 'fishball-004',
        name: 'Fishball',
        description: 'Deep fried fish balls',
        price: { cents: 2500 },
        is_active: true,
      },
      quantity_delta: -60,
      reason: 'transfer_out',
      user: {
        id: 'user_3',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-05T16:15:00Z',
      id: '12',
      product: {
        id: 'prod_5',
        sku: 'kikiam-005',
        name: 'Kikiam',
        description: 'Filipino style pork sausage',
        price: { cents: 6000 },
        is_active: true,
      },
      quantity_delta: -3,
      reason: 'adjustment',
      user: {
        id: 'user_2',
        first_name: 'Maria',
        last_name: 'Santos',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2025-01-04T11:30:00Z',
      id: '13',
      product: {
        id: 'prod_7',
        sku: 'tokneneng-007',
        name: 'Tokneneng',
        description: 'Orange coated chicken eggs',
        price: { cents: 3500 },
        is_active: true,
      },
      quantity_delta: 150,
      reason: 'restock',
      user: {
        id: 'user_1',
        first_name: 'Paolo',
        last_name: 'Julian',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-03T13:45:00Z',
      id: '14',
      product: {
        id: 'prod_2',
        sku: 'lumpiang-002',
        name: 'Lumpiang Shanghai',
        description: 'Crispy spring rolls',
        price: { cents: 8000 },
        is_active: true,
      },
      quantity_delta: -20,
      reason: 'sale',
      user: {
        id: 'user_1',
        first_name: 'Paolo',
        last_name: 'Julian',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2025-01-02T10:20:00Z',
      id: '15',
      product: {
        id: 'prod_8',
        sku: 'squidball-008',
        name: 'Squid Ball',
        description: 'Deep fried squid balls',
        price: { cents: 3500 },
        is_active: true,
      },
      quantity_delta: -8,
      reason: 'damage',
      user: {
        id: 'user_2',
        first_name: 'Maria',
        last_name: 'Santos',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2025-01-01T15:00:00Z',
      id: '16',
      product: {
        id: 'prod_3',
        sku: 'kwek-kwek-003',
        name: 'Kwek Kwek',
        description: 'Orange coated quail eggs',
        price: { cents: 3000 },
        is_active: true,
      },
      quantity_delta: 40,
      reason: 'transfer_in',
      user: {
        id: 'user_3',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
    {
      created_at: '2024-12-31T12:30:00Z',
      id: '17',
      product: {
        id: 'prod_6',
        sku: 'turon-006',
        name: 'Turon',
        description: 'Banana spring roll',
        price: { cents: 4000 },
        is_active: true,
      },
      quantity_delta: -45,
      reason: 'transfer_out',
      user: {
        id: 'user_3',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      warehouse: {
        id: 'wh_2',
        name: 'Branch Warehouse',
      },
    },
    {
      created_at: '2024-12-30T09:45:00Z',
      id: '18',
      product: {
        id: 'prod_1',
        sku: 'siomai-001',
        name: 'Siomai',
        description: 'Delicious pork siomai',
        price: { cents: 5000 },
        is_active: true,
      },
      quantity_delta: 12,
      reason: 'adjustment',
      user: {
        id: 'user_2',
        first_name: 'Maria',
        last_name: 'Santos',
      },
      warehouse: {
        id: 'wh_1',
        name: 'Main Warehouse',
      },
    },
  ];
  return (
    <div className='flex flex-col gap-2 rounded-2xl'>
      {items.map((item) => (
        <div
          key={item.id}
          className='bg-white p-4 border border-neutral-200 rounded-lg'
        >
          <div className='flex flex-row items-start justify-between'>
            <div>
              <AppText>{item.product.name}</AppText>
              <AppText className='text-neutral-500' variant={'small'}>
                {item.user.first_name} {item.user.last_name}
              </AppText>
            </div>
            <AppPill
              variant={getStockEntryReasonPillVariant(item.reason)}
              title={getStockEntryReasonText(item.reason, item.quantity_delta)}
            />
          </div>
          <div className='flex flex-row justify-end mt-2'>
            <AppText
              className='text-neutral-500'
              variant={'small'}
            >
              {dayjs(item.created_at).format('MMM D, YYYY h:mm A')}
            </AppText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockEntryList;
