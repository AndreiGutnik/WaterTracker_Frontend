import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PublicRegisterRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isRegistered } = useAuth();
  return isRegistered ? <Navigate to={redirectTo} /> : <Component />;
}
