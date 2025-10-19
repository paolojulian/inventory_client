import MainLayout from '@/components/layouts/MainLayout';
import InventoryList from '@/components/moduled/inventory/InventoryList';
import PageHeader from '@/components/shared/PageHeader';

const InventoryPage = () => {
  return (
    <MainLayout>
      <div className='mt-2'>
        <PageHeader title='Inventory' shouldHideBack shouldHideKebab />
      </div>
      <section id='products-page-table'>
        <InventoryList />
      </section>
    </MainLayout>
  );
};

export default InventoryPage;
