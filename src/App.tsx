import { Routes } from 'react-router';
import GuestRoute from './components/routes/GuestRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import { useLoadInitial } from './usecases/useLoadInitial';

const App = () => {
  const { isLoaded, error } = useLoadInitial();
  if (!isLoaded) {
    return null;
  }

  if (error) {
    console.error(error);
    return 'Something went wrong.';
  }

  return (
    <Routes>
      {/* Protected routes */}
      <ProtectedRoute path='/' element={<DashboardPage />}></ProtectedRoute>

      {/* Guest routes */}
      <GuestRoute path='/login' element={<LoginPage />}></GuestRoute>

      {/* Public routes */}
    </Routes>
  );
};

export default App;
