import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';

type AppPillVariant = 'success' | 'danger';

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
      })}
    >
      <AppText
        className={cn({
          'text-emerald-800': variant === 'success',
          'text-red-800': variant === 'danger',
        })}
      >
        {title}
      </AppText>
    </div>
  );
};

export default AppPill;
