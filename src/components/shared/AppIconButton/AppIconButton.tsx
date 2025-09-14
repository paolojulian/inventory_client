import cn from '@/utils/cn';
import { type ButtonHTMLAttributes } from 'react';

type AppIconButtonVariant = 'default' | 'with-borders' | 'danger';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: AppIconButtonVariant;
};

const AppIconButton = ({ variant = 'default', className, ...rest }: Props) => {
  return (
    <button
      className={cn(
        'size-8 flex flex-col items-center justify-center cursor-pointer hover:bg-black/20 transition-colors p-1',
        className,
        {
          'rounded-full': variant === 'default',
          'bg-red-50 border border-red-800': variant === 'danger',
          'border border-foreground': variant === 'with-borders',
        }
      )}
      {...rest}
    />
  );
};

export default AppIconButton;
