import {
  Navigate,
  Route,
  type RouteProps,
  useSearchParams,
} from 'react-router-dom';
import { useIsLoggedIn } from '../../usecases/auth/useIsLoggedIn';

type Props = RouteProps;

const GuestRoute = (props: Props) => {
  const { isLoggedIn, isLoading, error } = useIsLoggedIn();
  const [searchParams] = useSearchParams();

  if (isLoading) return null;
  if (error) throw error;

  if (isLoggedIn) {
    const redirectTo = searchParams.get('redirectTo') || '/';
    return <Navigate to={redirectTo} replace />;
  }

  return <Route {...props} />;
};

export default GuestRoute;
