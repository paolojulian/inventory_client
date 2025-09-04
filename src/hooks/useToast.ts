import { useToastStore, ToastType } from '@/stores/toast.store';

export const useToast = () => {
  const { addToast } = useToastStore();

  const toast = {
    success: (message: string, duration?: number) => addToast(message, 'success', duration),
    error: (message: string, duration?: number) => addToast(message, 'error', duration),
    warning: (message: string, duration?: number) => addToast(message, 'warning', duration),
    info: (message: string, duration?: number) => addToast(message, 'info', duration),
    show: (message: string, type?: ToastType, duration?: number) => addToast(message, type, duration),
  };

  return toast;
};

// Global toast function that can be used like alert()
let globalToastFunction: ReturnType<typeof useToast> | null = null;

export const setGlobalToast = (toastFn: ReturnType<typeof useToast>) => {
  globalToastFunction = toastFn;
};

// Global toast functions that can be used anywhere like alert()
export const toast = {
  success: (message: string, duration?: number) => globalToastFunction?.success(message, duration),
  error: (message: string, duration?: number) => globalToastFunction?.error(message, duration),
  warning: (message: string, duration?: number) => globalToastFunction?.warning(message, duration),
  info: (message: string, duration?: number) => globalToastFunction?.info(message, duration),
  show: (message: string, type?: ToastType, duration?: number) => globalToastFunction?.show(message, type, duration),
};