import { AppText } from '@/components/shared';
import ClipboardDocumentListIcon from '@/components/shared/icons/ClipboardDocumentListIcon';
import CubeIcon from '@/components/shared/icons/CubeIcon';
import HomeIcon from '@/components/shared/icons/HomeIcon';
import PlusIcon from '@/components/shared/icons/PlusIcon';
import TagIcon from '@/components/shared/icons/TagIcon';
import { URLS } from '@/config/url.const';
import cn from '@/utils/cn';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';

const BottomBar = () => {
  const location = useLocation();

  const isTabActive = (link: string): boolean => location.pathname === link;

  return (
    <div className='shadow-[0_-8px_16px_0px_rgba(0,0,0,0.1)] rounded-t-2xl h-full w-full flex items-center justify-center'>
      <NavItem
        title='Home'
        href={URLS.links.v1.dashboard}
        isActive={isTabActive(URLS.links.v1.dashboard)}
      >
        <HomeIcon />
      </NavItem>

      <NavItem
        title='Stock'
        href={URLS.links.v1.stockEntries}
        isActive={isTabActive(URLS.links.v1.stockEntries)}
      >
        <CubeIcon />
      </NavItem>

      <button className='bg-neutral-300 rounded-full p-1 justify-center items-center flex active:scale-95'>
        <div className='size-14 bg-neutral-900 rounded-full justify-center items-center flex'>
          <PlusIcon className='text-white size-8' />
        </div>
      </button>

      <NavItem
        title='Supply'
        href={URLS.links.v1.inventory}
        isActive={isTabActive(URLS.links.v1.inventory)}
      >
        <ClipboardDocumentListIcon />
      </NavItem>

      <NavItem
        title='Product'
        href={URLS.links.v1.products}
        isActive={isTabActive(URLS.links.v1.products)}
      >
        <TagIcon />
      </NavItem>
    </div>
  );
};

const NavItem = ({
  children,
  title,
  href,
  isActive = false,
}: {
  children: ReactNode;
  title: string;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Link to={href} className='active:scale-95 w-20'>
      <div
        className={cn('flex flex-col gap-1 items-center', {
          'text-neutral-800': isActive,
          'text-neutral-500': !isActive,
        })}
      >
        <div>{children}</div>
        <AppText variant={'small'}>{title}</AppText>
      </div>
    </Link>
  );
};

export default BottomBar;
