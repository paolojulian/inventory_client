import { AppText } from '@/components/shared/AppText';
import { type InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const AppRadioPill = ({ label, id, name, value, ...props }: Props) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>
      <input type='radio' id={id} name={name} value={value} {...props} />
      <label htmlFor={id}>
        <AppText as='span' className='text-gray-500'>
          {label}
        </AppText>
      </label>
    </div>
  );
};

export default AppRadioPill;
