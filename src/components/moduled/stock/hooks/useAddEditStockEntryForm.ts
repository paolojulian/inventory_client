import type { StockReason } from '@/components/moduled/stock/stock.types';
import { DEFAULT_WAREHOUSE_ID } from '@/domain/warehouse.domain';
import { useAddStockEntry, useUpdateStockEntry } from '@/hooks/moduled/stock';
import { toast } from '@/hooks/useToast';
import { useForm } from 'react-hook-form';

export type AddStockEntryFormData = {
  quantity_delta: string | number;
  reason: StockReason;
  product_id: string;
  warehouse_id: string;
};

const DEFAULT_VALUES: AddStockEntryFormData = {
  quantity_delta: 1,
  reason: 'restock',
  product_id: '',
  warehouse_id: '',
};

const STOCK_REASONS: { value: StockReason; label: string }[] = [
  { value: 'sale', label: 'Sale' },
  { value: 'restock', label: 'Restock' },
  { value: 'damage', label: 'Damage' },
  { value: 'transfer_in', label: 'Transfer In' },
  { value: 'transfer_out', label: 'Transfer Out' },
  { value: 'adjustment', label: 'Adjustment' },
] as const;

type Props = {
  stockEntryId?: string;
  onSuccess?: () => void;
  initialValues?: AddStockEntryFormData;
};

export const useAddEditStockEntryForm = (
  { onSuccess, initialValues, stockEntryId }: Props = {
    initialValues: undefined,
    stockEntryId: '',
  }
) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
    setValue,
  } = useForm<AddStockEntryFormData>({
    defaultValues: {
      ...DEFAULT_VALUES,
      warehouse_id: DEFAULT_WAREHOUSE_ID,
    },
  });

  const { mutateAsync: addStockEntry } = useAddStockEntry();
  const { mutateAsync: updateStockEntry } = useUpdateStockEntry();

  const onSubmit = handleSubmit(async (data) => {
    if (stockEntryId) {
      const result = await updateStockEntry({
        id: stockEntryId,
        data: {
          quantity_delta: Number(data.quantity_delta),
          reason: data.reason,
          product_id: data.product_id,
          warehouse_id: data.warehouse_id,
        },
      });
      if (!result) {
        toast.error('Unable to update stock entry, please try again later.');
        return;
      }

      toast.success('Stock entry updated successfully.');
      if (onSuccess) {
        onSuccess();
      }
    } else {
      const result = await addStockEntry({
        quantity_delta: Number(data.quantity_delta),
        reason: data.reason,
        product_id: data.product_id,
        warehouse_id: data.warehouse_id,
      });
      if (!result) {
        toast.error('Unable to add stock entry, please try again later.');
        return;
      }

      toast.success('Stock entry added successfully.');
      if (onSuccess) {
        onSuccess();
      }
    }
  });
  const onResetForm = () => reset(initialValues);

  return {
    control,
    errors,
    onResetForm,
    onSubmit,
    stockReasons: STOCK_REASONS,
    watch,
    setValue,
  };
};
