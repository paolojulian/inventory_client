import type { AddProductFormData } from '@/components/moduled/products/hooks/useAddEditProductForm';
import { AppButton, AppText, AppTextInput } from '@/components/shared';
import AppDivider from '@/components/shared/AppDivider';
import AppIconButton from '@/components/shared/AppIconButton';
import { AppTextArea } from '@/components/shared/AppTextArea';
import XMarkIcon from '@/components/shared/icons/XMarkIcon';
import {
  requiredAndEmptySpacesValidation,
  requiredValidation,
} from '@/utils/form-validations';
import type { FormEvent, Ref } from 'react';
import { Controller, type Control } from 'react-hook-form';

type Props = {
  onSubmit: () => void;
  onClose: () => void;
  nameInputRef: Ref<HTMLInputElement>;
  control: Control<AddProductFormData>;
  titleText?: string;
};

const AddEditProductForm = ({
  onClose,
  onSubmit,
  control,
  nameInputRef,
  titleText,
}: Props) => {
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
          name='name'
          control={control}
          rules={requiredAndEmptySpacesValidation}
          render={({ field, fieldState }) => (
            <AppTextInput
              id='name'
              autoFocus
              placeholder='Name of the product'
              label='Name'
              errorMessage={fieldState.error?.message}
              {...field}
              ref={nameInputRef}
            />
          )}
        />
        <Controller
          name='sku'
          control={control}
          rules={requiredAndEmptySpacesValidation}
          render={({ field, fieldState }) => (
            <AppTextInput
              id='sku'
              placeholder='Unique identifier e.g. ube-jam-400'
              label='SKU'
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name='description'
          control={control}
          rules={requiredAndEmptySpacesValidation}
          render={({ field, fieldState }) => (
            <AppTextArea
              id='description'
              placeholder='Description of the product'
              label='Description'
              errorMessage={fieldState.error?.message}
              rows={8}
              {...field}
            />
          )}
        />
        <Controller
          name='price'
          control={control}
          rules={{
            ...requiredValidation,
            min: 0,
          }}
          render={({ field, fieldState }) => (
            <AppTextInput
              id='price'
              placeholder='Price of the Product'
              type='number'
              label='Price'
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />
      </section>

      <div className='mt-4'>
        <AppButton isFullWidth type='submit'>
          Save
        </AppButton>
      </div>
    </form>
  );
};

export default AddEditProductForm;
