import { useAddProductsActions } from '@/components/moduled/products/useAddProductsActions';
import { AppButton, AppText, AppTextInput } from '@/components/shared';
import AppCtaFab from '@/components/shared/AppCtaFab';
import AppDivider from '@/components/shared/AppDivider';
import AppIconButton from '@/components/shared/AppIconButton';
import BottomSheetModal from '@/components/shared/BottomSheetModal';
import XMarkIcon from '@/components/shared/icons/XMarkIcon';
import {
  requiredAndEmptySpacesValidation,
  requiredValidation,
} from '@/utils/form-validations';
import { createPortal } from 'react-dom';
import { Controller } from 'react-hook-form';

const AddProduct = () => {
  const {
    control,
    nameInputRef,
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    onSubmit,
  } = useAddProductsActions();

  return (
    <>
      <div className='fixed right-0 bottom-0 p-8'>
        <AppCtaFab onClick={handleOpenModal}>
          <div className='text-4xl'>+</div>
        </AppCtaFab>
      </div>

      {createPortal(
        <BottomSheetModal onClose={handleCloseModal} isOpen={isModalOpen}>
          <div className='min-w-[600px] p-8'>
            <form onSubmit={onSubmit}>
              {/* header */}
              <section>
                <div className='flex flex-row justify-between'>
                  <AppText variant={'heading'}>Add Product</AppText>
                  <AppIconButton onClick={handleCloseModal}>
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
          </div>
        </BottomSheetModal>,
        document.body
      )}
    </>
  );
};

export default AddProduct;
