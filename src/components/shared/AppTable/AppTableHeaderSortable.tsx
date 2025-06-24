import AppTableHeader from '@/components/shared/AppTable/AppTableHeader';
import { ChevronUpDownIcon } from '@/components/shared/icons';
import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type SortTypes = 'asc' | 'desc' | 'default';

type Props = TableHTMLAttributes<HTMLTableCellElement> & {
  sortType?: SortTypes;
};

const AppTableHeaderSortable = ({
  children,
  sortType = 'default',
  ...props
}: Props) => {
  return (
    <AppTableHeader {...props}>
      <button
        className={cn(
          'flex items-center gap-2 cursor-pointer group',
          'text-black hover:text-link transition-colors'
        )}
        type='button'
      >
        <span>{children}</span>
        {sortType === 'asc' ? <span>ASC</span> : null}
        {sortType === 'desc' ? <span>DESC</span> : null}
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
