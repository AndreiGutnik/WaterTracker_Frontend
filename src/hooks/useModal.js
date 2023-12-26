import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modals/modalsSlice';

export const useModalClose = modRef => {
  const dispatch = useDispatch();
  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape' || !modRef.current.contains(e.target)) {
        dispatch(closeModal());
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('mousedown', close);
    };
  }, [modRef, dispatch]);
};
