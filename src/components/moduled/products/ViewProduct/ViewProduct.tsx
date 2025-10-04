import { AppText } from '@/components/shared';
import AppIconButton from '@/components/shared/AppIconButton';
import AppPill from '@/components/shared/AppPill';
import FullScreenModal from '@/components/shared/FullScreenModal';
import PencilIcon from '@/components/shared/icons/PencilIcon';
import TrashIcon from '@/components/shared/icons/TrashIcon';
import PageHeader from '@/components/shared/PageHeader';
import { useDeleteProduct } from '@/hooks/moduled/products';
import { useFindProductInCache } from '@/hooks/moduled/products/useFindProductInCache';
import { toast } from '@/hooks/useToast';
import { useProductStore } from '@/stores/product.store';
import { formatMoney } from '@/utils/money';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

const ViewProduct = () => {
  const [selectedViewProductId, setSelectedViewProduct] = useProductStore(
    useShallow((state) => [
      state.selectedViewProduct?.id || null,
      state.setSelectedViewProduct,
    ])
  );

  const selectedViewProduct = useFindProductInCache(selectedViewProductId);

  const setSelectedEditProduct = useProductStore(
    (state) => state.setSelectedEditProduct
  );
  const { mutateAsync: deleteProduct, isSuccess, isError } = useDeleteProduct();

  const handleClose = () => setSelectedViewProduct(null);
  const handleDelete = () => {
    if (selectedViewProduct) {
      const userConfirmed = confirm(
        `Are you sure you want to archive this product?`
      );
      if (userConfirmed) {
        deleteProduct({ id: selectedViewProduct.id });
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product deleted successfully.');
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error('Unable to delete product, please try again later.');
    }
  }, [isError]);

  const handleEdit = () => {
    if (selectedViewProduct) {
      setSelectedEditProduct(selectedViewProduct);
      handleClose();
    }
  };

  return (
    <FullScreenModal
      key={selectedViewProduct?.id}
      isOpen={!!selectedViewProduct}
    >
      {selectedViewProduct ? (
        <div className='h-full flex flex-col overflow-y-auto'>
          <section id='view-product-header'>
            <PageHeader
              onBack={handleClose}
              title=''
              variant='black'
              shouldHideKebab={true}
            />
            <div className='bg-black text-white p-4 pb-6'>
              <div className='space-y-1'>
                <AppText>
                  {formatMoney(selectedViewProduct.price.cents)}
                </AppText>
                <AppText variant='heading-lg'>
                  {selectedViewProduct.name}
                </AppText>
                <div className='flex flex-row gap-2'>
                  <AppPill
                    title={`${selectedViewProduct.sku.toUpperCase()}`}
                    variant='black'
                  ></AppPill>
                  <AppPill
                    title={
                      selectedViewProduct.is_active ? 'Active' : 'Inactive'
                    }
                    variant={
                      selectedViewProduct.is_active ? 'success' : 'danger'
                    }
                  ></AppPill>
                </div>
              </div>
            </div>
          </section>
          <section
            id='view-product-body'
            className='flex flex-col justify-between h-full p-4'
          >
            <AppText>{selectedViewProduct.description}</AppText>
            <div className=' flex flex-row justify-start items-center gap-2'>
              <AppIconButton
                onClick={handleDelete}
                className='size-12'
                variant='danger'
              >
                <TrashIcon className='size-6 text-red-800' />
              </AppIconButton>
              <AppIconButton
                onClick={handleEdit}
                className='size-12'
                variant='with-borders'
              >
                <PencilIcon className='size-6' />
              </AppIconButton>
            </div>
          </section>
        </div>
      ) : null}
    </FullScreenModal>
  );
};

export default ViewProduct;
