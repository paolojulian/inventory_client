import { useEffect } from 'react';
import ToastContainer from '@/components/shared/ToastContainer';
import { useToast, setGlobalToast } from '@/hooks/useToast';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toastFunctions = useToast();

  useEffect(() => {
    setGlobalToast(toastFunctions);
  }, [toastFunctions]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ToastProvider;