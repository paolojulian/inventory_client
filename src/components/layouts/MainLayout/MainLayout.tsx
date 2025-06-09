import { Header } from './Header';
import { Sidebar } from './Sidebar';

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-[20rem_1fr]'>
      <div className='sticky top-0 left-0 h-screen'>
        <Sidebar />
      </div>

      <div className='flex flex-col h-full'>
        <div className='sticky top-0'>
          <Header />
        </div>

        <main className='px-4 pl-2 overflow-y-auto pb-4 h-full'>
          <div className='bg-background border border-grey/20 shadow-sm rounded-xl p-4 min-h-full'>
            {children || 'Main Content'}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
