import cn from '@/utils/cn';
import type { SVGAttributes } from 'react';

type Props = SVGAttributes<SVGSVGElement>;

const ArrowLongLeftIcon = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn('size-6', className)}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
      />
    </svg>
  );
};

export default ArrowLongLeftIcon;
