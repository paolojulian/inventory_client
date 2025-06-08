import { AppText } from '@/components/shared';
import { URLS } from '@/config/url.const';
import { NavLink } from 'react-router';

export const Sidebar = () => {
  return (
    <aside className='row-span-2 bg-background p-4 pr-2'>
      <div className='rounded-2xl border border-grey w-full h-full flex flex-col gap-10'>
        <div className='px-4 py-4'>
          <AppText variant={'heading'}>Inventory</AppText>
        </div>

        <ul className='flex flex-col flex-1 justify-center'>
          <NavItem link={URLS.links.v1.dashboard} title='Dashboard' />
          <NavItem link={URLS.links.v1.stockEntries} title='Stock' />
          <NavItem link={URLS.links.v1.inventory} title='Inventory' />
          <NavItem link={URLS.links.v1.products} title='Products' />
        </ul>

        <button className='mt-auto p-4 hover:bg-grey/10 cursor-pointer text-left'>
          <AppText className='text-danger'>Logout</AppText>
        </button>
      </div>
    </aside>
  );
};

function NavItem({
  title,
  link,
}: {
  title: string;
  link: string;
  // isActive: boolean;
}) {
  return (
    <NavLink to={link}>
      <li className='py-4 px-4 hover:bg-grey/10 cursor-pointer' role='menuitem'>
        <AppText>{title}</AppText>
      </li>
    </NavLink>
  );
}
