import { URLS } from '@/config/url.const';
import ProductsPage from '@/pages/Products';
import StockEntriesPage from '@/pages/StockEntries';
import { Route, Routes } from 'react-router';
import GuestRoute from './components/routes/GuestRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import { useLoadInitial } from './usecases/useLoadInitial';
import InventoryPage from '@/pages/Inventory';
import { NotFoundPage } from '@/pages/NotFound';
import ToastProvider from './components/providers/ToastProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddProductPage from '@/pages/Products/add';
import AddStockEntryPage from '@/pages/StockEntries/add';

const queryClient = new QueryClient();

const App = () => {
  const { isLoaded } = useLoadInitial();
  if (!isLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Routes>
          <>
            {/* Protected routes */}
            <Route
              path={URLS.links.v1.dashboard}
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={URLS.links.v1.products.index}
              element={
                <ProtectedRoute>
                  <ProductsPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={URLS.links.v1.products.add}
              element={
                <ProtectedRoute>
                  <AddProductPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={URLS.links.v1.stockEntries.index}
              element={
                <ProtectedRoute>
                  <StockEntriesPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={URLS.links.v1.stockEntries.add}
              element={
                <ProtectedRoute>
                  <AddStockEntryPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={URLS.links.v1.inventory}
              element={
                <ProtectedRoute>
                  <InventoryPage />
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
            <Route path='*' element={<NotFoundPage />} />
          </>
        </Routes>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
