import { Header } from './Header';
import { Sidebar } from './Sidebar';

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-[20rem_1fr] h-screen'>
      <Sidebar />

      <div>
        <Header />

        <main className='p-4 pl-2 overflow-y-auto'>
          {children || 'Main Content'}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
