import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';

type Props = {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
  className?: string;
};

const AppChip = ({ label, isSelected = false, onClick, className }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-3 py-2 rounded-full border transition-all duration-200 active:scale-95',
        {
          'bg-blue-100 border-blue-200': isSelected,
          'bg-white border-neutral-200 hover:border-neutral-300': !isSelected,
        },
        className
      )}
    >
      <AppText
        as="span"
        className={cn({
          'text-blue-800': isSelected,
          'text-gray-700': !isSelected,
        })}
      >
        {label}
      </AppText>
    </button>
  );
};

export default AppChip;