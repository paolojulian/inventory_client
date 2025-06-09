import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableRowElement> & {
  variant?: 'default' | 'disabled';
};

const AppTableRow = ({ className, variant = 'default', ...props }: Props) => {
  return (
    <tr
      className={cn(
        'hover:bg-grey/5',
        {
          'opacity-30 bg-grey/2.5': variant === 'disabled',
        },
        className
      )}
      {...props}
    ></tr>
  );
};

export default AppTableRow;
