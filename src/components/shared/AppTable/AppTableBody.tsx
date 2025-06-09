import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableSectionElement>;

const AppTableBody = ({ className, ...props }: Props) => {
  return <tbody className={cn(className)} {...props}></tbody>;
};

export default AppTableBody;
