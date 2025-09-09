import cn from '@/utils/cn';
import type { SVGAttributes } from 'react';

type Props = SVGAttributes<SVGSVGElement>;

const PlusIcon = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn(className)}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  );
};

export default PlusIcon;
