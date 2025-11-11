import { useAddEditStockEntryForm } from '@/components/moduled/stock/hooks/useAddEditStockEntryForm';
import AddEditStockEntryForm from '@/components/moduled/stock/shared/AddEditStockEntryForm';
import { BottomSheetModal } from '@/components/shared';
import { useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddStockEntry = ({ isOpen, onClose }: Props) => {
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const { control, onSubmit, watch, setValue } = useAddEditStockEntryForm({
    onSuccess: onClose,
  });

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose}>
      <AddEditStockEntryForm
        control={control}
        onSubmit={onSubmit}
        onClose={onClose}
        quantityInputRef={quantityInputRef}
        watch={watch}
        setValue={setValue}
        titleText='Add Stock Entry'
        saveText='Add Stock Entry'
      />
    </BottomSheetModal>
  );
};

export default AddStockEntry;
