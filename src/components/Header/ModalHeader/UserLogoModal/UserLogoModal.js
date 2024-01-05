import { useState } from "react";
import { ModalHeader } from "../ModalHeader";
import { UserLogoutModal } from "../UserLogoutModal/UserLogoutModal";

export const UserLogoModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const toggleModal = () => setModalIsOpen(!modalIsOpen);
  return (
    <>
      <p>Setting</p>
      <button type="button" onClick={toggleModal}>Log out</button>
      <ModalHeader isOpen={modalIsOpen} onClose={toggleModal}><UserLogoutModal/></ModalHeader>

    </>
  );
};
