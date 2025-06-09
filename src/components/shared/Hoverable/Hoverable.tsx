import cn from '@/utils/cn';
import { type HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Hoverable = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'py-4 px-4 hover:bg-grey/10 cursor-pointer rounded-lg',
        'group/hoverable',
        className
      )}
      {...props}
    ></div>
  );
};

export default Hoverable;
