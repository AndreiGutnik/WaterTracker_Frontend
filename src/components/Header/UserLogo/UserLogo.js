import { useAuth } from 'hooks/useAuth';
import Icons from '../../../images/sprite.svg';
import { ThumbImg, WrapperBtn } from './UserLogo.styled';
import { useState } from 'react';
import { ModalHeader } from '../ModalHeader/ModalHeader';

export const UserLogo = () => {
  const { name, avatarURL } = useAuth().user;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <WrapperBtn type="button" onClick={toggleModal}>
        <p>{name}</p>
        <ThumbImg src={avatarURL} alt="logoUser" />
        <svg width="16" height="16" fill="#407BFF">
          <use href={Icons + '#arrow-down'}></use>
        </svg>
      </WrapperBtn>
      <ModalHeader isOpen={modalIsOpen} onClose={toggleModal}>
        <p>Settingcccccccccccccccc</p>
        <p>Log out</p>
      </ModalHeader>
    </>
  );
};
