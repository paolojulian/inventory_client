import type { ReactNode } from 'react';
import {
  Navigate,
  useLocation
} from 'react-router-dom';
import { useIsLoggedIn } from '../../usecases/auth/useIsLoggedIn';

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { isLoggedIn, isLoading, error } = useIsLoggedIn();
  const location = useLocation();

  if (isLoading) return null; // You could add a loader/spinner here
  if (error) throw error;

  if (!isLoggedIn) {
    const redirectPath = encodeURIComponent(location.pathname);
    return <Navigate to={`/login?redirectTo=${redirectPath}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
