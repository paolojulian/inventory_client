import MainLayout from '@/components/layouts/MainLayout';
import AddStockEntry from '@/components/moduled/stock/AddStockEntry';
import DeleteStockEntry from '@/components/moduled/stock/DeleteStockEntry';
import EditStockEntry from '@/components/moduled/stock/EditStockEntry';
import PageHeader from '@/components/shared/PageHeader';
import type { StockEntry } from '@/interfaces/rest/stock/stock-entry-list';
import { useState } from 'react';

const StockEntriesPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStockEntry, setSelectedStockEntry] =
    useState<StockEntry | null>(null);

  // const handleAddStockEntry = () => {
  //   setIsAddModalOpen(true);
  // };

  // const handleEditStockEntry = (stockEntry: StockEntry) => {
  //   setSelectedStockEntry(stockEntry);
  //   setIsEditModalOpen(true);
  // };

  // const handleDeleteStockEntry = (stockEntry: StockEntry) => {
  //   setSelectedStockEntry(stockEntry);
  //   setIsDeleteModalOpen(true);
  // };

  const handleCloseModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedStockEntry(null);
  };

  const handleSuccess = () => {
    // Refetch data will be handled by React Query automatically
    handleCloseModals();
  };

  return (
    <MainLayout>
      <div className='space-y-6'>
        <PageHeader title='Stock Entries' />
                
        {/* <StockEntryList
          onAddStockEntry={handleAddStockEntry}
          onEditStockEntry={handleEditStockEntry}
          onDeleteStockEntry={handleDeleteStockEntry}
        /> */}

        <AddStockEntry
          isOpen={isAddModalOpen}
          onClose={handleCloseModals}
        />

        <EditStockEntry
          isOpen={isEditModalOpen}
          onClose={handleCloseModals}
          stockEntry={selectedStockEntry}
        />

        <DeleteStockEntry
          isOpen={isDeleteModalOpen}
          onClose={handleCloseModals}
          stockEntry={selectedStockEntry}
          onSuccess={handleSuccess}
        />
      </div>
    </MainLayout>
  );
};

export default StockEntriesPage;
