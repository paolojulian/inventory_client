import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  children?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
};

const AppButton = ({
  className,
  title,
  children,
  isLoading = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-foreground text-background p-4 px-5 cursor-pointer active:scale-95 opacity-100 hover:opacity-80 transition-opacity',
        {
          'pointer-events-none': isLoading,
          'animate-pulse': isLoading,
        },
        className
      )}
      disabled={disabled || isLoading}
    >
      {title ? <AppText>{title}</AppText> : children}
    </button>
  );
};

export default AppButton;
