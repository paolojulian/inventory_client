import { AppText, Hoverable } from '@/components/shared';
import { URLS } from '@/config/url.const';
import { useLogoutMutation } from '@/usecases/auth/useLogoutMutation';
import cn from '@/utils/cn';
import { NavLink } from 'react-router';

export const Sidebar = () => {
  const { isPending, mutateAsync } = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await mutateAsync();
      window.location.replace(URLS.links.v1.login);
    } catch (e) {
      console.error(e);
      alert('unable to logout.');
    }
  };

  return (
    <aside className='p-4 pr-2 h-full'>
      <div className='w-full h-full flex flex-col gap-10'>
        <div className='px-4 py-4'>
          <AppText variant={'heading'}>Inventory.</AppText>
        </div>

        <ul className='flex flex-col flex-1 justify-center'>
          <NavItem link={URLS.links.v1.dashboard} title='Dashboard' />
          <NavItem link={URLS.links.v1.stockEntries.index} title='Stock' />
          <NavItem link={URLS.links.v1.inventory} title='Inventory' />
          <NavItem link={URLS.links.v1.products.index} title='Products' />
        </ul>

        <Hoverable>
          <button
            onClick={handleLogout}
            className={cn('mt-auto cursor-pointer text-left py-4 px-4 ', {
              'animate-pulse': isPending,
            })}
            disabled={isPending}
          >
            <AppText className='text-danger group-hover/hoverable:font-medium'>
              {isPending ? 'Logging out..' : 'Logout'}
            </AppText>
          </button>
        </Hoverable>
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
    <li>
      <NavLink to={link}>
        <Hoverable className='w-full'>
          <AppText className='group-hover/hoverable:font-medium text-foreground/80 group-hover/hoverable:text-foreground py-4 px-4 w-full'>
            {title}
          </AppText>
        </Hoverable>
      </NavLink>
    </li>
  );
}
