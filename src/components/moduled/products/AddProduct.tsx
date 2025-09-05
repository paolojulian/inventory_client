import AddEditProductForm from '@/components/moduled/products/AddEditProductForm';
import { useAddEditProductForm } from '@/components/moduled/products/useAddEditProductForm';
import { useAddProductsActions } from '@/components/moduled/products/useAddProductsActions';
import AppCtaFab from '@/components/shared/AppCtaFab';
import BottomSheetModal from '@/components/shared/BottomSheetModal';
import { createPortal } from 'react-dom';

const AddProduct = () => {
  const { control, onResetForm, onSubmit } = useAddEditProductForm();
  const { nameInputRef, isModalOpen, handleCloseModal, handleOpenModal } =
    useAddProductsActions({ onResetForm });

  return (
    <>
      <div className='fixed right-0 bottom-0 p-8'>
        <AppCtaFab type='button' onClick={handleOpenModal}>
          <div className='text-4xl'>+</div>
        </AppCtaFab>
      </div>

      {createPortal(
        <BottomSheetModal onClose={handleCloseModal} isOpen={isModalOpen}>
          <div className='min-w-[600px] p-8'>
            <AddEditProductForm
              onClose={handleCloseModal}
              nameInputRef={nameInputRef}
              control={control}
              onSubmit={onSubmit}
            />
          </div>
        </BottomSheetModal>,
        document.body
      )}
    </>
  );
};

export default AddProduct;
