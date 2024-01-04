import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modals/modalsSlice';
import modalConstants from 'redux/modals/modalСonstants';
import { selectModalType } from 'redux/modals/selectors';

export const useModalClose = modRef => {
  const modal = useSelector(selectModalType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal === modalConstants.CLOSE) {
      return;
    }

    const close = e => {
      const isButton = e.type === 'keydown';

      if (
        e.key === 'Escape' ||
        (!isButton && !modRef.current.contains(e.target))
      ) {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', close);
    window.addEventListener('mousedown', close);

    return () => {
      window.removeEventListener('keydown', close);
      window.removeEventListener('mousedown', close);
    };
  }, [modRef, dispatch, modal]);
};
