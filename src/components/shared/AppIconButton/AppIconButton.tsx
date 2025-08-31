import { type ReactNode } from 'react';

type Props = {
  onClick?: () => void;
  children?: ReactNode;
};

const AppIconButton = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className='size-8 flex flex-col items-center justify-center cursor-pointer rounded-full hover:bg-black/20 transition-colors p-1'
    >
      {children}
    </button>
  );
};

export default AppIconButton;
