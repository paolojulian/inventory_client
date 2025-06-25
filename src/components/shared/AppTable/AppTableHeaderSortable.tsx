import AppTableHeader from '@/components/shared/AppTable/AppTableHeader';
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from '@/components/shared/icons';
import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type SortTypes = 'asc' | 'desc' | 'default';

type Props = TableHTMLAttributes<HTMLTableCellElement> & {
  onClickSort?: (sortType: SortTypes) => void;
  sortType?: SortTypes;
};

const AppTableHeaderSortable = ({
  onClickSort,
  children,
  sortType = 'default',
  ...props
}: Props) => {
  const handleClickSort = () => {
    const newSortType =
      sortType === 'asc' ? 'desc' : sortType === 'desc' ? 'default' : 'asc';
    onClickSort?.(newSortType);
  };

  return (
    <AppTableHeader {...props}>
      <button
        onClick={handleClickSort}
        className={cn(
          'flex items-center gap-2 cursor-pointer group',
          'text-black hover:text-link transition-colors',
          'active:scale-95'
        )}
        type='button'
      >
        <span>{children}</span>
        {sortType === 'asc' ? <ChevronUpIcon /> : null}
        {sortType === 'desc' ? <ChevronDownIcon /> : null}
        {sortType === 'default' ? (
          <span>
            <ChevronUpDownIcon />
          </span>
        ) : null}
      </button>
    </AppTableHeader>
  );
};

export default AppTableHeaderSortable;
