import { type ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const AppIconButton = ({ ...rest }: Props) => {
  return (
    <button
      className='size-8 flex flex-col items-center justify-center cursor-pointer rounded-full hover:bg-black/20 transition-colors p-1'
      {...rest}
    />
  );
};

export default AppIconButton;
