import cn from '@/utils/cn';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

export type PopperPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export type PopperPosition = {
  x: number;
  y: number;
  placement: PopperPlacement;
};

type Props = {
  trigger: ReactNode;
  children: (props: { onClose: () => void }) => ReactNode;
  placement?: PopperPlacement;
  offset?: number;
  className?: string;
  popperClassName?: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  role?: 'menu' | 'listbox' | 'dialog' | 'tooltip';
};

const PLACEMENT_STYLES: Record<PopperPlacement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2',
  'top-start': 'bottom-full left-0',
  'top-end': 'bottom-full right-0',
  bottom: 'top-full left-1/2 -translate-x-1/2',
  'bottom-start': 'top-full left-0',
  'bottom-end': 'top-full right-0',
  left: 'right-full top-1/2 -translate-y-1/2',
  'left-start': 'right-full top-0',
  'left-end': 'right-full bottom-0',
  right: 'left-full top-1/2 -translate-y-1/2',
  'right-start': 'left-full top-0',
  'right-end': 'left-full bottom-0',
};

const Popper = ({
  trigger,
  children,
  placement = 'bottom',
  offset = 8,
  className,
  popperClassName,
  isOpen: controlledIsOpen,
  onOpenChange,
  closeOnClickOutside = true,
  closeOnEscape = true,
  ariaLabel,
  ariaLabelledBy,
  role = 'menu',
}: Props) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const setIsOpen = useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setInternalIsOpen(open);
      }
      onOpenChange?.(open);
    },
    [isControlled, onOpenChange]
  );

  const togglePopper = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePopper();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!closeOnClickOutside) return;

      const target = event.target as Node;
      if (
        triggerRef.current &&
        popperRef.current &&
        !triggerRef.current.contains(target) &&
        !popperRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (!closeOnEscape) return;

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeOnClickOutside, closeOnEscape, setIsOpen]);

  const getOffsetStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {};

    if (placement.includes('top')) {
      styles.marginBottom = `${offset}px`;
    } else if (placement.includes('bottom')) {
      styles.marginTop = `${offset}px`;
    } else if (placement.includes('left')) {
      styles.marginRight = `${offset}px`;
    } else if (placement.includes('right')) {
      styles.marginLeft = `${offset}px`;
    }

    return styles;
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn('relative inline-block', className)}>
      <div
        ref={triggerRef}
        onClick={togglePopper}
        onKeyDown={handleTriggerKeyDown}
        className='cursor-pointer'
        tabIndex={0}
        role='button'
        aria-expanded={isOpen}
        {...(ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy })}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={popperRef}
          className={cn(
            'absolute z-50',
            PLACEMENT_STYLES[placement],
            popperClassName
          )}
          style={getOffsetStyles()}
          role={role}
          {...(ariaLabel && { 'aria-label': ariaLabel })}
          {...(ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy })}
        >
          {children({ onClose: handleClose })}
        </div>
      )}
    </div>
  );
};

export default Popper;
