import { useEffect,useState } from 'react';
import Modal from 'react-modal';
import HeaderSetting from "../../Setting/HeaderSetting";
import Setting from "../../Setting/Setting";
import UploadImage from "../../Setting/UploadImage";
import FormSetting from "../../Setting/FormSetting";
import { nanoid } from '@reduxjs/toolkit';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-root');

export const ModalHeader = ({ isOpen, onClose }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const showModal = () => setIsShowModal(true)
  const closeModal = () => setIsShowModal(false)

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

  function createUser(data) {
    const newUser = {
      ...data,
     id: nanoid(),
     }
     console.log('newUser :>>', newUser)
     }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <HeaderSetting  showModal={showModal} /> {isShowModal && (
        <Setting closeModal={closeModal} onRequestClose={onClose}>
          <UploadImage createUser={createUser} />
          <FormSetting createUser={createUser} />
        </Setting>)}  
       
        <p>Log out</p>    
      </Modal>      
    </>
  );
};
