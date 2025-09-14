import BottomBar from '@/components/layouts/MainLayout/BottomBar';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type Props = {
  children?: React.ReactNode;
  PageHeaderComponent?: React.ReactNode;
};

const MainLayout = ({ children, PageHeaderComponent }: Props) => {
  return (
    <>
      <div className='hidden sm:grid grid-cols-[20rem_1fr]'>
        <div className='sticky top-0 left-0 h-screen'>
          <Sidebar />
        </div>

        <div className='flex flex-col h-full'>
          <div className='sticky top-0'>
            <Header />
          </div>

          <main className='px-4 pl-2 overflow-y-auto pb-4 h-full'>
            <div className='bg-background border border-grey/20 shadow-sm rounded-xl p-4 min-h-full'>
              <div className='mx-auto'>
                {PageHeaderComponent}
                {children || 'Main Content'}
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className='sm:hidden'>
        <main className='px-2 mb-28 w-full'>{children}</main>
        <div className='fixed bottom-0 inset-x-0 h-24'>
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
