import { AppButton, AppText, FullScreenModal } from '@/components/shared';
import { useDeleteStockEntry } from '@/hooks/moduled/stock';
import type { StockEntry } from '@/interfaces/rest/stock/stock-entry-list';
import { toast } from '@/hooks/useToast';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  stockEntry: StockEntry | null;
  onSuccess?: () => void;
};

const DeleteStockEntry = ({ isOpen, onClose, stockEntry, onSuccess }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutateAsync: deleteStockEntry } = useDeleteStockEntry();

  const handleDelete = async () => {
    if (!stockEntry) return;

    setIsDeleting(true);
    try {
      await deleteStockEntry(stockEntry.id);
      toast.success('Stock entry deleted successfully.');
      onSuccess?.();
      onClose();
    } catch {
      toast.error('Failed to delete stock entry.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <FullScreenModal isOpen={isOpen}>
      <div className='p-6 space-y-6 h-full flex flex-col'>
        <div>
          <AppText variant='heading' className='mb-2'>
            Delete Stock Entry
          </AppText>
          <AppText>
            Are you sure you want to delete this stock entry? This action cannot be undone.
          </AppText>
        </div>

        {stockEntry && (
          <div className='bg-gray-50 p-4 rounded-lg space-y-2'>
            <AppText variant='small'>Quantity Delta: {stockEntry.quantity_delta}</AppText>
            <AppText variant='small'>Reason: {stockEntry.reason}</AppText>
            <AppText variant='small'>Product ID: {stockEntry.product_id}</AppText>
            <AppText variant='small'>Warehouse ID: {stockEntry.warehouse_id}</AppText>
          </div>
        )}

        <div className='flex gap-3 mt-auto'>
          <AppButton
            variant='ghost'
            onClick={onClose}
            disabled={isDeleting}
            className='flex-1'
          >
            Cancel
          </AppButton>
          <AppButton
            variant='primary'
            onClick={handleDelete}
            disabled={isDeleting}
            className='flex-1 bg-red-600 hover:bg-red-700'
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </AppButton>
        </div>
      </div>
    </FullScreenModal>
  );
};

export default DeleteStockEntry;
