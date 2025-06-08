import { Route, Routes } from 'react-router';
import GuestRoute from './components/routes/GuestRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import { useLoadInitial } from './usecases/useLoadInitial';

const App = () => {
  const { isLoaded } = useLoadInitial();
  if (!isLoaded) {
    return null;
  }

  return (
    <main className='font-display'>
      <Routes>
        <>
          {/* Protected routes */}
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          ></Route>

          {/* Guest routes */}
          <Route
            path='/login'
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
            }
          ></Route>

          {/* Public routes */}
        </>
      </Routes>
    </main>
  );
};

export default App;
