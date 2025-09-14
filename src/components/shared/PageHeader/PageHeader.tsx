import AppIconButton from '@/components/shared/AppIconButton';
import { AppText } from '@/components/shared/AppText';
import { ChevronLeftIcon } from '@/components/shared/icons';
import KebabIcon from '@/components/shared/icons/KebabIcon';
import cn from '@/utils/cn';

type PageHeaderVariant = 'neutral' | 'black';

type Props = {
  onBack?: () => void;
  title: string;
  variant?: PageHeaderVariant;
  shouldHideKebab?: boolean;
  shouldHideBack?: boolean;
};

const PageHeader = ({
  onBack,
  title,
  variant = 'neutral',
  shouldHideKebab = false,
  shouldHideBack = false,
}: Props) => {
  return (
    <div className='sticky top-0 inset-x-0 -px-4'>
      <div
        className={cn('grid grid-cols-3 items-center px-2 py-4', {
          'bg-foreground text-background': variant === 'black',
          'bg-neutral-50 text-foreground': variant === 'neutral',
        })}
      >
        <div>
          {!shouldHideBack && (
            <AppIconButton onClick={onBack}>
              <ChevronLeftIcon />
            </AppIconButton>
          )}
        </div>
        <AppText className='justify-self-center'>{title}</AppText>
        <div className='flex flex-row items-center gap-1 justify-end'>
          {!shouldHideKebab && (
            <AppIconButton>
              <KebabIcon />
            </AppIconButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
