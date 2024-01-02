import { useSelector } from 'react-redux';
import { dailyNormaSelector, userData } from './selectors';

export const useAuth = () => {
  const dailyNorma = useSelector(dailyNormaSelector);

  return {
    dailyNorma,
  };
};

export const useAuthData = () => {
  const user = useSelector(userData);

  return {
    user,
  };
};
