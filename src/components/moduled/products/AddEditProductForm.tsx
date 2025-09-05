import type { AddProductFormData } from '@/components/moduled/products/useAddEditProductForm';
import { AppButton, AppText, AppTextInput } from '@/components/shared';
import AppDivider from '@/components/shared/AppDivider';
import AppIconButton from '@/components/shared/AppIconButton';
import XMarkIcon from '@/components/shared/icons/XMarkIcon';
import {
  requiredAndEmptySpacesValidation,
  requiredValidation,
} from '@/utils/form-validations';
import type { Ref } from 'react';
import { Controller, type Control } from 'react-hook-form';

type Props = {
  onSubmit: () => void;
  onClose: () => void;
  nameInputRef: Ref<HTMLInputElement>;
  control: Control<AddProductFormData>;
};

const AddEditProductForm = ({
  onClose,
  onSubmit,
  control,
  nameInputRef,
}: Props) => {
  return (
    <form onSubmit={onSubmit}>
      {/* header */}
      <section>
        <div className='flex flex-row justify-between'>
          <AppText variant={'heading'}>Add Product</AppText>
          <AppIconButton onClick={onClose}>
            <XMarkIcon />
          </AppIconButton>
        </div>
        <AppDivider className='my-2 mb-5' />
      </section>

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
            <AppTextInput
              id='description'
              placeholder='Description of the product'
              label='Description'
              errorMessage={fieldState.error?.message}
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
        <AppButton type='submit'>Save</AppButton>
      </section>
    </form>
  );
};

export default AddEditProductForm;
