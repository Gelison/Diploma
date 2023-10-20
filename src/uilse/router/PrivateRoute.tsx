import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to='singin' />;
};
