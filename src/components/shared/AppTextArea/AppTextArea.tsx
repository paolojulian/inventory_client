import cn from '@/utils/cn';
import {
  forwardRef,
  type TextareaHTMLAttributes,
  useEffect,
  useState,
} from 'react';

type AppTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  onChangeText?: (text?: string | number) => void;
  id: string;
  label: string;
  value?: string | number;
  isFullWidth?: boolean;
  errorMessage?: string;
  variant?: 'default' | 'rounded';
};

const AppTextArea = forwardRef<HTMLTextAreaElement, AppTextAreaProps>(
  (
    {
      onChangeText = () => {},
      onChange,
      id,
      label,
      className,
      isFullWidth = true,
      errorMessage,
      value,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState<string | number | undefined>(
      value
    );

    const hasValue: boolean = !!localValue;
    const hasError: boolean = !!errorMessage;
    const resolvedLabel: string =
      hasError && errorMessage ? `${label} — ${errorMessage}` : label;

    useEffect(() => {
      // Sync local value with the parent
      if (localValue !== value) {
        onChangeText(localValue);
      }
    }, [localValue]);

    const handleChange: TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'] =
      (e) => {
        onChange?.(e);
        setLocalValue(e.target?.value);
      };

    return (
      <div
        data-element-name='AppTextArea'
        className={cn('relative', 'group', {
          'w-full': isFullWidth,
        })}
      >
        <textarea
          ref={ref}
          onChange={handleChange}
          id={id}
          className={cn(
            'peer',
            'placeholder-transparent focus:placeholder-grey',
            'pt-6 px-4 pb-2 border border-grey',
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
        ></textarea>

        {/* Focused label */}
        <div
          className={cn(
            'absolute left-4 top-1',
            'text-grey',
            'pointer-events-none transition-all ease-in-out',
            'peer-placeholder-shown:opacity-0',
            'peer-placeholder-shown:scale-0',
            'peer-focus:opacity-100',
            'peer-focus:scale-100',
            {
              'text-danger': hasError,
              'opacity-0 scale-0': !hasValue,
              'opacity-100 scale-100': !!hasValue,
            }
          )}
        >
          <small>{resolvedLabel}</small>
        </div>

        {/* Placeholder label */}
        <label
          aria-label={id}
          htmlFor={id}
          className={cn(
            'absolute left-4 top-4',
            'text-grey',
            'pointer-events-none transition-all ease-in-out',
            'peer-placeholder-shown:opacity-100',
            'peer-placeholder-shown:scale-100',
            'peer-focus:opacity-0',
            'peer-focus:scale-0',
            {
              'text-red-500': hasError,
              'opacity-0 scale-0': hasValue,
              'opacity-100 scale-100': !hasValue,
            }
          )}
        >
          <p>{resolvedLabel}</p>
        </label>
      </div>
    );
  }
);

AppTextArea.displayName = 'AppTextInput';

export default AppTextArea;
