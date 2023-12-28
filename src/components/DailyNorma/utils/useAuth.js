import { useSelector } from 'react-redux';
import {
  dailyNormaSelector,
} from './selectors';

export const useAuth = () => {
  const dailyNorma = useSelector(dailyNormaSelector);

  return {
    dailyNorma,
  };
};