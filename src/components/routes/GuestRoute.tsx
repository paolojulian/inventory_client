import type { ReactNode } from 'react';
import {
  Navigate,
  useSearchParams
} from 'react-router-dom';
import { useIsLoggedIn } from '../../usecases/auth/useIsLoggedIn';

type Props = {
  children: ReactNode;
};

const GuestRoute = ({ children }: Props) => {
  const { isLoggedIn, isLoading, error } = useIsLoggedIn();
  const [searchParams] = useSearchParams();

  if (isLoading) return null;
  if (error) throw error;

  if (isLoggedIn) {
    const redirectTo = searchParams.get('redirectTo') || '/';
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default GuestRoute;
