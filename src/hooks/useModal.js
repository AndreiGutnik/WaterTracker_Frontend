import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modals/modalsSlice';
import modalConstants from 'redux/modals/modalСonstants';

export const useModalClose = modRef => {
  const modal = useSelector(state => state.modals.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    const close = e => {
      if (
        e.key === 'Escape' ||
        !modRef.current.contains(e.target) ||
        modal === modalConstants.CLOSE
      ) {
        dispatch(closeModal());
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('mousedown', close);
    };
  }, [modRef, dispatch, modal]);
};
