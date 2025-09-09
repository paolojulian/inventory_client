import { AppText } from '@/components/shared';
import ClipboardDocumentListIcon from '@/components/shared/icons/ClipboardDocumentListIcon';
import CubeIcon from '@/components/shared/icons/CubeIcon';
import HomeIcon from '@/components/shared/icons/HomeIcon';
import TagIcon from '@/components/shared/icons/TagIcon';
import cn from '@/utils/cn';
import type { ReactNode } from 'react';

const BottomBar = () => {
  return (
    <div className='rounded-t-2xl h-full w-full border border-neutral-400 flex items-center justify-center'>
      <NavItem title='Home'>
        <HomeIcon />
      </NavItem>

      <NavItem title='Stock'>
        <CubeIcon />
      </NavItem>

      <NavItem title='Inventory'>
        <ClipboardDocumentListIcon />
      </NavItem>

      <NavItem title='Product'>
        <TagIcon />
      </NavItem>
    </div>
  );
};

const NavItem = ({
  children,
  title,
  isActive = false,
}: {
  children: ReactNode;
  title: string;
  isActive?: boolean;
}) => {
  return (
    <button className='active:scale-95 w-36'>
      <div
        className={cn('flex flex-col gap-2 items-center', {
          'text-neutral-800': isActive,
          'text-neutral-600': !isActive,
        })}
      >
        <div>{children}</div>
        <AppText>{title}</AppText>
      </div>
    </button>
  );
};

export default BottomBar;
