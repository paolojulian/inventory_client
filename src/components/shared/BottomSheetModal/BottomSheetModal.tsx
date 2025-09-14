import cn from '@/utils/cn';
import type { ReactNode } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
};

const BottomSheetModal = ({ onClose, isOpen, children }: Props) => {
  return (
    <div
      className={cn(
        'fixed inset-0 transition-opacity flex flex-col items-center justify-end',
        'z-50',
        {
          'pointer-events-auto opaciy-100': isOpen,
          'pointer-events-none opacity-0': !isOpen,
        }
      )}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={cn('absolute inset-0 bg-black/30')}
      ></div>

      {/* Content */}
      <div
        className={cn(
          'relative bg-white rounded-t-2xl shadow-2xl transition-transform duration-100 w-fit',
          {
            'translate-y-0': isOpen,
            'translate-y-full': !isOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheetModal;
