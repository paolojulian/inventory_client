import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

const FullScreenModal = ({ children }: Props) => {
  return createPortal(
    <div className='bg-white fixed inset-0'>{children}</div>,
    document.body
  );
};

export default FullScreenModal;
