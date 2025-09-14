import { AppText } from '@/components/shared';
import AppIconButton from '@/components/shared/AppIconButton';
import AppPill from '@/components/shared/AppPill';
import FullScreenModal from '@/components/shared/FullScreenModal';
import PencilIcon from '@/components/shared/icons/PencilIcon';
import TrashIcon from '@/components/shared/icons/TrashIcon';
import PageHeader from '@/components/shared/PageHeader';
import { useProductStore } from '@/stores/product.store';
import { formatMoney } from '@/utils/money';
import { useShallow } from 'zustand/react/shallow';

const ViewProduct = () => {
  const [selectedViewProduct, setSelectedViewProduct] = useProductStore(
    useShallow((state) => [
      state.selectedViewProduct,
      state.setSelectedViewProduct,
    ])
  );

  const handleClose = () => setSelectedViewProduct(null);
  const handleDelete = () => {
    confirm(`Are you sure you want to archive this product?`);
  };

  return (
    <FullScreenModal
      key={selectedViewProduct?.id}
      isOpen={!!selectedViewProduct}
    >
      {selectedViewProduct ? (
        <div className='h-full flex flex-col overflow-y-auto'>
          <PageHeader
            onBack={handleClose}
            title=''
            variant='black'
            shouldHideKebab={true}
          />

          <section id='view-product-header'>
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
                      selectedViewProduct.status === 'active'
                        ? 'Active'
                        : 'Inactive'
                    }
                    variant={
                      selectedViewProduct.status === 'active'
                        ? 'success'
                        : 'danger'
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
              <AppIconButton className='size-12' variant='with-borders'>
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
