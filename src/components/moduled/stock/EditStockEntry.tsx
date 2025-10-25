import { BottomSheetModal } from '@/components/shared';
import AddEditStockEntryForm from '@/components/moduled/stock/shared/AddEditStockEntryForm';
import { useAddEditStockEntryForm } from '@/components/moduled/stock/hooks/useAddEditStockEntryForm';
import type { StockEntry } from '@/interfaces/rest/stock/stock-entry-list';
import { useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  stockEntry: StockEntry | null;
};

const EditStockEntry = ({ isOpen, onClose, stockEntry }: Props) => {
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const { control, onSubmit } = useAddEditStockEntryForm({
    stockEntryId: stockEntry?.id,
    initialValues: stockEntry
      ? {
          quantity_delta: stockEntry.quantity_delta.toString(),
          reason: stockEntry.reason,
          product_id: stockEntry.product_id,
          warehouse_id: stockEntry.warehouse_id,
        }
      : undefined,
    onSuccess: onClose,
  });

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose}>
      <AddEditStockEntryForm
        control={control}
        onSubmit={onSubmit}
        onClose={onClose}
        quantityInputRef={quantityInputRef}
        titleText='Edit Stock Entry'
        saveText='Update Stock Entry'
      />
    </BottomSheetModal>
  );
};

export default EditStockEntry;
