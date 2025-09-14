import AppIconButton from '@/components/shared/AppIconButton';
import { AppText } from '@/components/shared/AppText';
import { ChevronLeftIcon } from '@/components/shared/icons';
import KebabIcon from '@/components/shared/icons/KebabIcon';

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <div className='sticky top-0 inset-x-0 -px-4'>
      <div className='grid grid-cols-3 bg-neutral-50 items-center px-2 py-4 mb-2'>
        <div>
          <AppIconButton>
            <ChevronLeftIcon />
          </AppIconButton>
        </div>
        <AppText variant={'heading'}>{title}</AppText>
        <div className='flex flex-row items-center gap-1 justify-end'>
          <AppIconButton>
            <KebabIcon />
          </AppIconButton>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
