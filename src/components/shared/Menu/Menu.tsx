import { Hoverable } from '@/components/shared/Hoverable';
import cn from '@/utils/cn';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Menu = ({ children }: Props) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-32'>
      <div className='flex flex-col gap-1'>{children}</div>
    </div>
  );
};

type MenuItemCommonProps = {
  onClick: () => void;
  className?: string;
};

type MenuItemPropsWithTitle = MenuItemCommonProps & {
  TitleComponent?: undefined;
  title: string;
};

type MenuItemPropsWithComponent = MenuItemCommonProps & {
  TitleComponent: ReactNode;
  title?: undefined;
};

type MenuItem = MenuItemPropsWithTitle | MenuItemPropsWithComponent;

const MenuItem = ({ onClick, className, TitleComponent, title }: MenuItem) => {
  return (
    <button onClick={onClick} className={cn('text-left', className)}>
      {TitleComponent ? (
        TitleComponent
      ) : (
        <Hoverable className='size-full px-3 py-2 rounded'>{title}</Hoverable>
      )}
    </button>
  );
};

export { MenuItem };
export default Menu;
