// import { useEffect } from 'react';
// import Modal from 'react-modal';

import { ModalWrapper } from './ModalHeader.styled';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Modal.setAppElement('#modal-root');

export const ModalHeader = ({ isOpen, onClose, children }) => {
  // useEffect(() => {
  //   const close = e => {
  //     if (e.key === 'Escape') {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener('keydown', close);
  //   document.addEventListener('mousedown', close);
  //   return () => {
  //     document.removeEventListener('keydown', close);
  //     document.removeEventListener('mousedown', close);
  //   };
  // }, [onClose]);

  return <>{isOpen && <ModalWrapper>{children}</ModalWrapper>}</>;
};
