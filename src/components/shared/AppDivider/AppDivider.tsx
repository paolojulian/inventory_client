import cn from '@/utils/cn';

type Props = {
  className?: string;
};

const AppDivider = ({ className }: Props) => {
  return <hr className={cn('border-t-gray-500 border-t', className)} />;
};

export default AppDivider;
