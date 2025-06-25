import cn from '@/utils/cn';
import type { SVGAttributes } from 'react';

type Props = SVGAttributes<SVGSVGElement>;

const ChevronUpIcon = ({ className, ...props }: Props) => {
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
        d='m4.5 15.75 7.5-7.5 7.5 7.5'
      />
    </svg>
  );
};

export default ChevronUpIcon;
