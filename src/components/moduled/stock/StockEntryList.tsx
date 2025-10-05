import { AppButton, AppChip, AppText } from '@/components/shared';
import { AppTable } from '@/components/shared/AppTable';
import { useGetStockEntryList } from '@/hooks/moduled/stock';
import type { StockEntry } from '@/interfaces/rest/stock/stock-entry-list';
import { formatRelativeTime } from '@/utils/date';
import { useRef } from 'react';

type Props = {
  onAddStockEntry: () => void;
  onEditStockEntry: (stockEntry: StockEntry) => void;
  onDeleteStockEntry: (stockEntry: StockEntry) => void;
};

const StockEntryList = ({ onAddStockEntry, onEditStockEntry, onDeleteStockEntry }: Props) => {
  const { data, isLoading, error } = useGetStockEntryList({ limit: 50 });
  const tableRef = useRef<HTMLDivElement>(null);

  const getReasonColor = (reason: string) => {
    switch (reason) {
      case 'restock':
        return 'bg-green-100 text-green-800';
      case 'sale':
        return 'bg-blue-100 text-blue-800';
      case 'damage':
        return 'bg-red-100 text-red-800';
      case 'transfer_in':
        return 'bg-purple-100 text-purple-800';
      case 'transfer_out':
        return 'bg-orange-100 text-orange-800';
      case 'adjustment':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getQuantityColor = (quantity: number) => {
    if (quantity > 0) {
      return 'text-green-600';
    } else if (quantity < 0) {
      return 'text-red-600';
    }
    return 'text-gray-600';
  };

  const formatReason = (reason: string) => {
    return reason.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <AppText>Loading stock entries...</AppText>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-64'>
        <AppText variant='error'>Failed to load stock entries</AppText>
      </div>
    );
  }

  const stockEntries = data?.stock_entries || [];

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <AppText variant='heading'>Stock Entries ({data?.total || 0})</AppText>
        <AppButton onClick={onAddStockEntry}>
          Add Stock Entry
        </AppButton>
      </div>

      <div ref={tableRef} className='overflow-x-auto'>
        <AppTable
          headers={[
            { key: 'quantity_delta', label: 'Quantity' },
            { key: 'reason', label: 'Reason' },
            { key: 'product_id', label: 'Product ID' },
            { key: 'warehouse_id', label: 'Warehouse ID' },
            { key: 'created_at', label: 'Date' },
            { key: 'actions', label: 'Actions' },
          ]}
          data={stockEntries.map((entry) => ({
            ...entry,
            quantity_delta: (
              <span className={getQuantityColor(entry.quantity_delta)}>
                {entry.quantity_delta > 0 ? '+' : ''}{entry.quantity_delta}
              </span>
            ),
            reason: (
              <AppChip className={getReasonColor(entry.reason)}>
                {formatReason(entry.reason)}
              </AppChip>
            ),
            created_at: formatRelativeTime(entry.created_at),
            actions: (
              <div className='flex gap-2'>
                <AppButton
                  variant='secondary'
                  size='sm'
                  onClick={() => onEditStockEntry(entry)}
                >
                  Edit
                </AppButton>
                <AppButton
                  variant='danger'
                  size='sm'
                  onClick={() => onDeleteStockEntry(entry)}
                >
                  Delete
                </AppButton>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default StockEntryList;
