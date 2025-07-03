import cn from '@/utils/cn';
import { type FC, type InputHTMLAttributes, useEffect, useState } from 'react';

type AppTextInputSmProps = InputHTMLAttributes<HTMLInputElement> & {
  onChangeText?: (text?: string | number) => void;
  id: string;
  value?: string | number;
  isFullWidth?: boolean;
  errorMessage?: string;
  variant?: 'default' | 'rounded';
};

const AppTextInputSm: FC<AppTextInputSmProps> = ({
  onChangeText = () => {},
  onChange,
  id,
  className,
  isFullWidth = true,
  errorMessage,
  value,
  variant = 'default',
  ...props
}) => {
  const [localValue, setLocalValue] = useState<string | number | undefined>(
    value
  );

  const hasError: boolean = !!errorMessage;

  useEffect(() => {
    // Sync local value with the parent
    if (localValue !== value) {
      onChangeText(localValue);
    }
  }, [localValue]);

  const handleChange: InputHTMLAttributes<HTMLInputElement>['onChange'] = (
    e
  ) => {
    onChange?.(e);
    setLocalValue(e.target?.value);
  };

  return (
    <input
      onChange={handleChange}
      id={id}
      className={cn(
        'peer',
        'py-2 px-4 border border-grey',
        'outline-foreground',
        {
          'w-full': isFullWidth,
          'border-danger outline outline-danger': !!hasError,
          'rounded-lg': variant === 'rounded',
        },
        className
      )}
      value={value}
      {...props}
    />
  );
};

export default AppTextInputSm;
