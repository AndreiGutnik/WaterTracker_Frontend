import { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius:10,
  },
  overlay:{backgroundColor: 'rgba(0, 0, 0, 0.8)'},
};

Modal.setAppElement('#modal-root');

export const ModalHeader = ({ isOpen, onClose, styleItem, children}) => {
  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('mousedown', close);
    };
  }, [onClose]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{...customStyles, ...styleItem }}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </>
  );
};
