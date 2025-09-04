import cn from '@/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const AppCtaFab = ({ ...rest }: Props) => {
  return (
    <button
      className={cn(
        // base shape + size
        'relative flex items-center justify-center rounded-full size-16 p-2',
        'bg-accent text-white shadow',
        // animation
        'transition-all duration-100',
        'hover:scale-105 hover:shadow-lg',
        'active:scale-95',
        'cursor-pointer'
      )}
      {...rest}
    />
  );
};

export default AppCtaFab;
