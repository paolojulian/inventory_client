import { AppText } from '@/components/shared/AppText';
import cn from '@/utils/cn';
import { type TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableCellElement>;

const AppTableHeader = ({ className, children, ...props }: Props) => {
  return (
    <th
      className={cn('border-b border-grey/10 px-4 py-3', className)}
      {...props}
    >
      <AppText as='span' className='font-medium'>
        {children}
      </AppText>
    </th>
  );
};

export default AppTableHeader;
