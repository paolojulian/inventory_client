import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type AppButtonVariants = 'primary' | 'ghost';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  children?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
  variant?: AppButtonVariants;
};

const AppButton = ({
  className,
  title,
  children,
  isLoading = false,
  disabled = false,
  isFullWidth = false,
  variant = 'primary',
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-foreground text-background p-4 px-5 cursor-pointer active:scale-95 opacity-100 hover:opacity-80 transition-opacity',
        {
          'bg-foreground text-background': variant === 'primary',
          'bg-neutral-50 text-foreground border border-neutral-200': variant === 'ghost',
          'pointer-events-none': isLoading,
          'animate-pulse': isLoading,
          'w-full': isFullWidth,
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
