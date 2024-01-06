import { useEffect } from 'react';
import { ModalContainer } from './WaterModals.styled';
import { createPortal } from 'react-dom';
import modalConstants from 'redux/modals/modalСonstants';

const modalRoot = document.getElementById('modal-root');

export const WaterModal = ({ open, children }) => {
  useEffect(() => {
    if (open !== modalConstants.CLOSE) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  if (open === modalConstants.CLOSE) return null;

  return createPortal(
    <ModalContainer>{children}</ModalContainer>,

    modalRoot
  );
};
