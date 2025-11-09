import { useOffline } from '@/hooks/useOffline';
import { AppText } from './AppText';
import cn from '@/utils/cn';

export const OfflineIndicator = () => {
  const isOffline = useOffline();

  if (!isOffline) return null;

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-orange-500 text-white px-4 py-2',
        'flex items-center justify-center',
        'shadow-md'
      )}
    >
      <AppText variant="small" className="text-white">
        ⚠️ You're offline - Some features may not work
      </AppText>
    </div>
  );
};
