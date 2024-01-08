import { useEffect } from 'react';
import { ModalWrapper } from './ModalHeader.styled';

export const ModalHeader = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('mousedown', onClose);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('mousedown', onClose);
    };
  }, []);

  return <>{isOpen && <ModalWrapper>{children}</ModalWrapper>}</>;
};
