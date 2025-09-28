import { useToastStore } from '@/stores/toast.store';

const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();

  const getToastStyles = (type: string) => {
    const baseStyles =
      'min-w-80 p-4 rounded-lg shadow-lg border-l-4 flex items-center justify-between animate-slide-in';

    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-50 border-green-500 text-green-800`;
      case 'error':
        return `${baseStyles} bg-red-50 border-red-500 text-red-800`;
      case 'warning':
        return `${baseStyles} bg-yellow-50 border-yellow-500 text-yellow-800`;
      case 'info':
      default:
        return `${baseStyles} bg-blue-50 border-blue-500 text-blue-800`;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'ℹ';
    }
  };

  if (!toasts.length) return null;

  return (
    <div className='fixed top-4 right-4 z-50 space-y-2'>
      {toasts.map((toast) => (
        <div key={toast.id} className={getToastStyles(toast.type)}>
          <div className='flex items-center'>
            <span className='mr-2 text-lg font-bold'>
              {getIcon(toast.type)}
            </span>
            <span className='font-medium'>{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className='ml-4 text-lg hover:opacity-70 font-bold'
            aria-label='Close toast'
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
