import cn from '@/utils/cn';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const FullScreenModal = ({ isOpen, children }: Props) => {
  return createPortal(
    <div
      className={cn('bg-white fixed inset-0 z-40 transition-opacity', {
        'pointer-events-auto opacity-100': isOpen,
        'pointer-events-none opacity-0': !isOpen,
      })}
    >
      {children}
    </div>,
    document.body
  );
};

export default FullScreenModal;
