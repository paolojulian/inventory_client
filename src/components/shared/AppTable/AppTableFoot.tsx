import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableSectionElement>;

const AppTableFoot = ({ className, ...props }: Props) => {
  return <tfoot className={cn(className)} {...props}></tfoot>;
};

export default AppTableFoot;
