import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from '@/context/authenticationContext';

export const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = useAuthState();

  return user?.login && user?.password ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
};
