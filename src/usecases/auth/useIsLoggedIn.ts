import { useQuery } from '@tanstack/react-query';
import checkIfLoggedIn from './checkIfLoggedIn.util';
import { AUTH_UC_KEYS } from './constants';

const useIsLoggedIn = () => {
  const { data, isLoading, isFetched, isError, error } = useQuery({
    queryKey: AUTH_UC_KEYS.isLoggedIn(),
    queryFn: checkIfLoggedIn,
    retry: false, // Don't retry if unauthenticated
    staleTime: 1000 * 60 * 5, // Optional: cache it for 5 minutes
  });

  return {
    isLoggedIn: !!data,
    isFetched,
    isLoading,
    isError,
    error,
  };
};

export { useIsLoggedIn };
