import { useAddEditStockEntryForm } from '@/components/moduled/stock/hooks/useAddEditStockEntryForm';
import AddEditStockEntryForm from '@/components/moduled/stock/shared/AddEditStockEntryForm';
import PageHeader from '@/components/shared/PageHeader';
import { URLS } from '@/config/url.const';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export type SortTypes = 'asc' | 'desc' | 'default';
export type SortBy = 'name' | 'sku' | 'price';
export type FilterStatus = 'all' | 'active' | 'inactive';

const AddStockEntryPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => navigate(URLS.links.v1.stockEntries.index);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { control, onSubmit, watch, setValue } = useAddEditStockEntryForm({
    onSuccess: handleSuccess,
  });

  const onClose = () => {};

  const handleBack = () => navigate(URLS.links.v1.stockEntries.index);

  return (
    <div className='h-full flex flex-col'>
      <PageHeader onBack={handleBack} title='Stock Entry' shouldHideKebab />
      <div className='p-4 h-full'>
        <AddEditStockEntryForm
          onSubmit={onSubmit}
          onClose={onClose}
          quantityInputRef={nameInputRef}
          control={control}
          watch={watch}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default AddStockEntryPage;
