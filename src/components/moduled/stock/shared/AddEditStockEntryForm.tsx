import type { AddStockEntryFormData } from '@/components/moduled/stock/hooks/useAddEditStockEntryForm';
import ProductBottomSheetPicker from '@/components/moduled/stock/shared/ProductBottomSheetPicker';
import {
  STOCK_REASONS,
  type StockReason,
} from '@/components/moduled/stock/stock.types';
import { AppButton, AppChip, AppText, AppTextInput } from '@/components/shared';
import AppDivider from '@/components/shared/AppDivider';
import AppIconButton from '@/components/shared/AppIconButton';
import PlusIcon from '@/components/shared/icons/PlusIcon';
import XMarkIcon from '@/components/shared/icons/XMarkIcon';
import {
  requiredAndEmptySpacesValidation,
  requiredValidation,
} from '@/utils/form-validations';
import type { FormEvent, Ref } from 'react';
import { useEffect } from 'react';
import {
  Controller,
  type Control,
  type UseFormSetValue,
  type UseFormWatch,
} from 'react-hook-form';

type Props = {
  onSubmit: () => void;
  onClose: () => void;
  quantityInputRef: Ref<HTMLInputElement>;
  control: Control<AddStockEntryFormData>;
  watch: UseFormWatch<AddStockEntryFormData>;
  setValue: UseFormSetValue<AddStockEntryFormData>;
  stockReasons?: Record<StockReason, string>;
  titleText?: string;
  saveText?: string;
};

const AddEditStockEntryForm = ({
  onClose,
  onSubmit,
  control,
  quantityInputRef,
  watch,
  setValue,
  stockReasons = STOCK_REASONS,
  titleText,
  saveText = 'Save',
}: Props) => {
  const reason = watch('reason');
  const quantityDelta = watch('quantity_delta');

  // Reset quantity to 1 when switching from negative value to non-adjustment reason
  useEffect(() => {
    const currentQuantity = Number(quantityDelta);
    if (reason !== 'adjustment' && currentQuantity < 0) {
      setValue('quantity_delta', 1);
    }
  }, [reason, quantityDelta, setValue]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='h-full flex flex-col justify-between'
    >
      {/* header */}
      {!!titleText && (
        <section>
          <div className='flex flex-row justify-between'>
            <AppText variant={'heading'}>{titleText}</AppText>
            <AppIconButton onClick={onClose} type='button'>
              <XMarkIcon />
            </AppIconButton>
          </div>
          <AppDivider className='my-2 mb-5' />
        </section>
      )}

      {/* body */}
      <section className='flex flex-col gap-4'>
        <Controller
          name='product_id'
          control={control}
          rules={requiredAndEmptySpacesValidation}
          render={({ field }) => (
            <ProductBottomSheetPicker
              onSelect={field.onChange}
              id='product_id'
              placeholder='Select product'
              label='Product'
              value={field.value}
            />
          )}
        />

        <Controller
          name='quantity_delta'
          control={control}
          rules={{
            ...requiredValidation,
            validate: (value) => {
              const numValue = Number(value);
              if (reason === 'adjustment') {
                // Allow any non-zero value for adjustments
                if (numValue === 0) {
                  return 'Quantity cannot be 0';
                }
              } else {
                // Only allow positive values for non-adjustment reasons
                if (numValue < 1) {
                  return 'Quantity must be at least 1';
                }
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <div className='flex flex-row items-center'>
              <button
                onClick={() => {
                  const currentValue = Number(field.value);
                  // For adjustment, allow going negative
                  if (reason === 'adjustment') {
                    field.onChange(currentValue - 1);
                  } else {
                    // For other reasons, stop at 1
                    if (currentValue <= 1) return;
                    field.onChange(currentValue - 1);
                  }
                }}
                type='button'
                className='h-full px-4 border-l border-y border-grey flex items-center justify-center'
              >
                -
              </button>
              <AppTextInput
                id='quantity_delta'
                autoFocus
                placeholder='Enter quantity change'
                label='Quantity Delta'
                type='number'
                errorMessage={fieldState.error?.message}
                {...field}
                ref={quantityInputRef}
              />
              <button
                onClick={() => {
                  field.onChange(Number(field.value) + 1);
                }}
                type='button'
                className='h-full px-4 border-r border-y border-grey flex items-center justify-center'
              >
                <PlusIcon className='w-4 h-4' />
              </button>
            </div>
          )}
        />

        <Controller
          name='reason'
          control={control}
          rules={requiredAndEmptySpacesValidation}
          render={({ field, fieldState }) => (
            <div>
              <AppText variant='body' className='mb-2 block'>
                Reason
              </AppText>
              <div className='flex flex-wrap gap-2'>
                {Object.entries(stockReasons).map(([reason, label]) => (
                  <AppChip
                    key={reason}
                    label={label}
                    onClick={() => field.onChange(reason)}
                    isSelected={field.value === reason}
                  />
                ))}
              </div>
              {fieldState.error && (
                <AppText variant='body' className='mt-1'>
                  {fieldState.error.message}
                </AppText>
              )}
            </div>
          )}
        />
      </section>

      <div className='mt-4'>
        <AppButton isFullWidth type='submit'>
          {saveText}
        </AppButton>
      </div>
    </form>
  );
};

export default AddEditStockEntryForm;
