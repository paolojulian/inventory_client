import { useEffect, useState } from 'react';
import { useIsLoggedIn } from './auth/useIsLoggedIn';

export function useLoadInitial() {
  const isLoggedInHook = useIsLoggedIn();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (false === isLoggedInHook.isFetched) {
      setIsLoaded(false);
      return;
    }

    setIsLoaded(true);
  }, [isLoggedInHook.isFetched]);

  useEffect(() => {
    if (isLoggedInHook.error) {
      setError(isLoggedInHook.error);
      return;
    }
  }, [isLoggedInHook.error]);

  return {
    isLoaded,
    error,
  };
}
