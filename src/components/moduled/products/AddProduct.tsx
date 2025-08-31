import { useAddProductsActions } from '@/components/moduled/products/useAddProductsActions';
import { AppButton, AppText, AppTextInput } from '@/components/shared';
import AppCtaFab from '@/components/shared/AppCtaFab';
import AppDivider from '@/components/shared/AppDivider';
import AppIconButton from '@/components/shared/AppIconButton';
import BottomSheetModal from '@/components/shared/BottomSheetModal';
import XMarkIcon from '@/components/shared/icons/XMarkIcon';
import { createPortal } from 'react-dom';

const AddProduct = () => {
  const { nameInputRef, isModalOpen, handleCloseModal, handleOpenModal } =
    useAddProductsActions();

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
              <AppTextInput
                ref={nameInputRef}
                id='name'
                placeholder='Name of the product'
                label='Name'
              />
              <AppTextInput
                id='sku'
                placeholder='Unique identifier e.g. ube-jam-400'
                label='SKU'
              />
              <AppTextInput
                id='description'
                placeholder='Description of the product'
                label='Description'
              />
              <AppTextInput
                id='amount'
                placeholder='Amount of the Product'
                type='number'
                label='Amount'
              />
              <AppButton>Save</AppButton>
            </section>
          </div>
        </BottomSheetModal>,
        document.body
      )}
    </>
  );
};

export default AddProduct;
