import cn from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

type FontVariants = 'small' | 'body' | 'heading' | 'heading-lg' | 'heading-xl';

const fontVariantsMap = {
  small: 'text-[12px] lg:text-[14px] font-normal tracking-[0.04em]',
  body: 'text-[14px] lg:text-[14px] font-normal',
  heading: 'text-xl',
  'heading-lg':
    'text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] mt-1',
  'heading-xl':
    'text-[72px] lg:text-[120px] leading-[0.9] lg:leading-[0.9] font-normal tracking-[-0.04em] mt-2',
} satisfies Record<FontVariants, string>;

export const AppTextVariants = cva('font-display', {
  variants: {
    variant: fontVariantsMap,
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface AppTextProps extends VariantProps<typeof AppTextVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}

function AppText({
  as: CustomElement = 'p',
  onClick,
  children,
  className = '',
  id,
  variant,
}: AppTextProps) {
  return (
    <CustomElement
      id={id}
      className={cn(AppTextVariants({ variant, className }))}
      onClick={onClick}
    >
      {children}
    </CustomElement>
  );
}

export default AppText;
