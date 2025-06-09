import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableCellElement> & {
  variant?: 'default' | 'disabled';
};

const AppTableData = ({ className, variant = 'default', ...props }: Props) => {
  return (
    <td
      className={cn(
        'border-b border-grey/10 px-4 py-3',
        {
          'opacity-50': variant === 'disabled',
        },
        className
      )}
      {...props}
    ></td>
  );
};

export default AppTableData;
