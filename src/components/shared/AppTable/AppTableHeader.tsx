import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableCellElement>;

const AppTableHeader = ({ className, ...props }: Props) => {
  return (
    <th
      className={cn('border-b border-grey/10 px-4 py-2', className)}
      {...props}
    ></th>
  );
};

export default AppTableHeader;
