import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableElement>;

const AppTable = ({ className, ...props }: Props) => {
  return (
    <table
      className={cn(
        'table-auto md:table-fixed text-left [--gutter:--spacing(8)]',
        className
      )}
      {...props}
    ></table>
  );
};

export default AppTable;
