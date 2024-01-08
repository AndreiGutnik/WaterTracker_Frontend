import { useAuth } from 'hooks/useAuth';
import Icons from '../../../images/sprite.svg';
import { Button, ThumbImg, WrapperBtn } from './UserLogo.styled';
import { useState } from 'react';
import { ModalHeader } from '../ModalHeader/ModalHeader';

export const UserLogo = () => {
  const { name, avatarURL } = useAuth().user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);

  const handleOpenModal = setState => setState(true);
  const handleCloseModal = setState => setModalIsOpen(false);

  return (
    <>
      <WrapperBtn type="button" onClick={() => handleOpenModal(setModalIsOpen)}>
        <p>{name}</p>
        <ThumbImg src={avatarURL} alt="logoUser" />
        <svg width="16" height="16" fill="#407BFF">
          <use href={Icons + '#arrow-down'}></use>
        </svg>
      </WrapperBtn>
      <ModalHeader
        isOpen={modalIsOpen}
        onClose={() => handleCloseModal(setModalIsOpen)}
      >
        <Button
          type="button"
          onClick={() => handleOpenModal(setIsOpenSettingModal)}
        >
          <svg width="16" height="16">
            <use href={Icons + '#settings'}></use>
          </svg>
          <p>Setting</p>
        </Button>
        <Button
          type="button"
          onClick={() => handleOpenModal(setIsOpenLogoutModal)}
        >
          <svg width="16" height="16">
            <use href={Icons + '#logout'}></use>
          </svg>
          <p>Log out</p>
        </Button>
      </ModalHeader>
    </>
  );
};
