import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';

export type AppPillVariant =
  | 'success'
  | 'danger'
  | 'black'
  | 'warning'
  | 'blue'
  | 'grey';

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
        'bg-blue-100 border border-blue-200': variant === 'blue',
        'bg-orange-100 border border-orange-200': variant === 'warning',
        'bg-neutral-100 border border-neutral-200': variant === 'grey',
      })}
    >
      <AppText
        className={cn({
          'text-emerald-800': variant === 'success',
          'text-red-800': variant === 'danger',
          'text-background': variant === 'black',
          'text-blue-800': variant === 'blue',
          'text-orange-800': variant === 'warning',
          'text-neutral-800': variant === 'grey',
        })}
      >
        {title}
      </AppText>
    </div>
  );
};

export default AppPill;
