import { useAddEditProductForm } from '@/components/moduled/products/hooks/useAddEditProductForm';
import { AddEditProductForm } from '@/components/moduled/products/shared';
import PageHeader from '@/components/shared/PageHeader';
import { URLS } from '@/config/url.const';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const AddProductPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => navigate(URLS.links.v1.products.index);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { control, onSubmit } = useAddEditProductForm({
    onSuccess: handleSuccess,
  });

  const onClose = () => {};

  const handleBack = () => navigate(URLS.links.v1.products.index);

  return (
    <div className='h-full flex flex-col'>
      <PageHeader onBack={handleBack} title='Add Product' shouldHideKebab />
      <div className='p-4 h-full'>
        <AddEditProductForm
          onClose={onClose}
          onSubmit={onSubmit}
          nameInputRef={nameInputRef}
          control={control}
        />
      </div>
    </div>
  );
};

export default AddProductPage;
