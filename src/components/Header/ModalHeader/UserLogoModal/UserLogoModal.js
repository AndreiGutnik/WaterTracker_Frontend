import { useState } from 'react';
import { ModalHeader } from '../ModalHeader';
import { UserLogoutModal } from '../UserLogoutModal/UserLogoutModal';
import { ModalUser } from './UserLogoModal.styled';

export const UserLogoModal = ({ isOpenLogoutModal, onCloseLogoutModal }) => {
  // const [modalLogOutIsOpen, setModalLogOutIsOpen] = useState(false);
  // const toggleModalLogOut = () => setModalLogOutIsOpen(!modalLogOutIsOpen);

  //   const toggle = () => {
  //     // closeModalLogout();
  //     closeModalUserLogo();
  //   };

  return (
    <>
    <ModalUser>
      <p>Setting</p>
      <button type="button" onClick={onCloseLogoutModal}>
        Log out
      </button>
      </ModalUser>
      <ModalHeader isOpen={isOpenLogoutModal} onClose={onCloseLogoutModal} >
        <UserLogoutModal />
      </ModalHeader>
    </>
  );
};
