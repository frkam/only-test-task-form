import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '@/entities/user';

export const ProtectedRoutes = () => {
  const { user } = useAuthState();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
