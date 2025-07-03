import cn from '@/utils/cn';
import { type HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Hoverable = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'hover:bg-grey/10 cursor-pointer rounded-lg',
        'group/hoverable',
        'inline-block',
        className
      )}
      {...props}
    ></div>
  );
};

export default Hoverable;
