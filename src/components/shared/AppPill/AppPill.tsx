import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';

type AppPillVariant = 'success' | 'danger' | 'black';

type Props = {
  title: string;
  variant: AppPillVariant;
};

const AppPill = ({ title, variant }: Props) => {
  return (
    <div
      className={cn('px-2 py-1 rounded-full w-fit', {
        'bg-emerald-100 border border-emerald-200': variant === 'success',
        'bg-red-100 border border-red-200': variant === 'danger',
        'bg-foreground border border-background': variant === 'black',
      })}
    >
      <AppText
        className={cn({
          'text-emerald-800': variant === 'success',
          'text-red-800': variant === 'danger',
          'text-background': variant === 'black',
        })}
      >
        {title}
      </AppText>
    </div>
  );
};

export default AppPill;
