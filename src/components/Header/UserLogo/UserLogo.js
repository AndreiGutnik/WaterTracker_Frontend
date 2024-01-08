import { useAuth } from 'hooks/useAuth';
import Icons from '../../../images/sprite.svg';
import { ThumbImg, WrapperBtn } from './UserLogo.styled';
import { useState } from 'react';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { UserLogoModal } from '../ModalHeader/UserLogoModal/UserLogoModal';

const styleItem = {
  content: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    right: '0px',
    bottom: 'auto',
  },
  overlay: { backgroundColor: 'tarnsparent' },
};

export const UserLogo = () => {
  const { name, avatarURL } = useAuth().user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalLogOutIsOpen, setModalLogOutIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  // const toggleModalLogout = () => setModalLogOutIsOpen(!modalLogOutIsOpen);
  // const closeModal = () => setModalIsOpen(false);
  // const toggleModal = () => {
  //   if (!modalIsOpen && !modalLogOutIsOpen) {
  //     setModalIsOpen(!modalIsOpen);
  //     return;
  //   }
  //   setModalIsOpen(!modalIsOpen);
  //   setModalLogOutIsOpen(!modalLogOutIsOpen);
  // };

  // const toggleModalLogOut = () => setModalLogOutIsOpen(!modalLogOutIsOpen);

  return (
    <>
      <WrapperBtn type="button" onClick={toggleModal}>
        <p>{name}</p>
        <ThumbImg src={avatarURL} alt="logoUser" />
        <svg width="16" height="16" fill="#407BFF">
          <use href={Icons + '#arrow-down'}></use>
        </svg>
      </WrapperBtn>
      <ModalHeader
        isOpen={modalIsOpen}
        onClose={toggleModal}
        styleItem={styleItem}
      >
        <UserLogoModal/>
      </ModalHeader>
    </>
  );
};
