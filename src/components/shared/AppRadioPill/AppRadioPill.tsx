import { AppText } from '@/components/shared/AppText';
import { type InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const AppRadioPill = ({ label, id, name, value, onChange, ...props }: Props) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>
      <input 
        {...props}
        type='radio' 
        id={id} 
        name={name} 
        value={value} 
        onChange={onChange}
      />
      <label htmlFor={id} className='cursor-pointer'>
        <AppText as='span' className='text-gray-500'>
          {label}
        </AppText>
      </label>
    </div>
  );
};

export default AppRadioPill;
