import { useAddEditProductForm } from '@/components/moduled/products/hooks/useAddEditProductForm';
import { AddEditProductForm } from '@/components/moduled/products/shared';
import { BottomSheetModal } from '@/components/shared';
import type { Product } from '@/domain/product.domain';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  onClose: () => void;
  product: Product | null;
};

const EditProduct = ({ onClose, product }: Props) => {
  const { onResetForm, onSubmit, control } = useAddEditProductForm({
    initialValues: product
      ? {
          description: product.description,
          name: product.name,
          sku: product.sku,
          price: product.price.cents,
        }
      : undefined,
  });

  const isModalOpen: boolean = !!product;
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isModalOpen) {
      onResetForm();
    }
  }, [isModalOpen]);

  return createPortal(
    <BottomSheetModal onClose={onClose} isOpen={isModalOpen}>
      <div className='w-screen sm:min-w-[600px] p-8'>
        <AddEditProductForm
          onClose={onClose}
          onSubmit={onSubmit}
          nameInputRef={nameInputRef}
          control={control}
          titleText='Edit Product'
        />
      </div>
    </BottomSheetModal>,
    document.body
  );
};

export default EditProduct;
