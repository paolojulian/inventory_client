import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableSectionElement>;

const AppTableHead = ({ className, ...props }: Props) => {
  return <thead className={cn(className)} {...props}></thead>;
};

export default AppTableHead;
