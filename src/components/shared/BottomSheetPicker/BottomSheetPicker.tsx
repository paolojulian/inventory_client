import { AppText } from '@/components/shared/AppText';
import BottomSheetModal from '@/components/shared/BottomSheetModal';
import cn from '@/utils/cn';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export type BottomSheetPickerOption = { id: string; value: string };

type Props = {
  onSelect: (id: string) => void;
  label?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  isFullWidth?: boolean;
  className?: string;
  options?: BottomSheetPickerOption[];
};

const BottomSheetPicker = ({
  onSelect,
  id,
  label,
  value,
  placeholder,
  isFullWidth = true,
  options = [],
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasValue: boolean = Boolean(value);

  const handleToggleBottomSheet = () => setIsOpen(!isOpen);
  const handleCloseBottomSheet = () => setIsOpen(false);
  const handleSelect = (id: string) => {
    onSelect(id);
    handleCloseBottomSheet();
  };

  const selectedOption = options.find((option) => option.id === value);

  return (
    <>
      <div
        onClick={handleToggleBottomSheet}
        className={cn(
          'relative',
          'group',
          {
            'w-full': isFullWidth,
          },
          className
        )}
      >
        {/* Text display area */}
        <div
          className={cn(
            'pt-6 px-4 pb-2 border border-grey min-h-[48px] flex items-end',
            {
              'w-full': isFullWidth,
            }
          )}
        >
          <span className='text-foreground'>
            {hasValue && selectedOption ? selectedOption.value : <>&nbsp;</>}
          </span>
        </div>

        {/* Focused label */}
        <div
          className={cn(
            'absolute left-4 top-1',
            'text-grey',
            'pointer-events-none transition-all ease-in-out',
            'peer-placeholder-shown:opacity-0',
            'peer-placeholder-shown:scale-0',
            'peer-focus:opacity-100',
            'peer-focus:scale-100',
            {
              'opacity-0 scale-0': !hasValue,
              'opacity-100 scale-100': !!hasValue,
            }
          )}
        >
          <small>{label}</small>
        </div>

        {/* Placeholder label */}
        <label
          aria-label={id}
          htmlFor={id}
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2',
            'text-grey',
            'pointer-events-none transition-all ease-in-out',
            'peer-placeholder-shown:opacity-100',
            'peer-placeholder-shown:scale-100',
            'peer-focus:opacity-0',
            'peer-focus:scale-0',
            {
              'opacity-0 scale-0': hasValue,
              'opacity-100 scale-100': !hasValue,
            }
          )}
        >
          <p>{label}</p>
        </label>
      </div>
      {createPortal(
        <BottomSheetModal isOpen={isOpen} onClose={handleCloseBottomSheet}>
          <div className='w-screen sm:min-w-[600px] max-h-[80vh] overflow-y-auto'>
            <div className='flex flex-col'>
              <AppText variant='small' className='py-4 px-6 uppercase'>
                {placeholder}
              </AppText>

              <div role='menu' className='pb-10'>
                {options.map(({ id, value }) => (
                  <BottomSheetPickerItem
                    key={id}
                    onSelect={handleSelect}
                    id={id}
                    value={value}
                    isSelected={selectedOption?.id === id}
                  />
                ))}
              </div>
            </div>
          </div>
        </BottomSheetModal>,
        document.body
      )}
    </>
  );
};

function BottomSheetPickerItem({
  onSelect,
  value,
  isSelected,
  id,
}: {
  onSelect: (id: string) => void;
  id: string;
  isSelected: boolean;
  value: string;
}) {
  const handleSelect = () => onSelect(id);

  return (
    <div
      onClick={handleSelect}
      role='menuitem'
      className='py-3 px-6 border-b first:border-t border-gray-200 w-full'
    >
      <AppText
        variant='body'
        className={cn({
          'text-accent': isSelected,
          'text-grey': !isSelected,
        })}
      >
        {value}
      </AppText>
    </div>
  );
}

export default BottomSheetPicker;
