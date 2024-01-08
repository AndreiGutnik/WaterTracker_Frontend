import { useAuth } from 'hooks/useAuth';
import Icons from '../../../images/sprite.svg';
import { ThumbImg, WrapperBtn, ModalWrap } from './UserLogo.styled';
import { useState } from 'react';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { UserLogoutModal } from '../UserLogoutModal/UserLogoutModal';
import Setting from 'components/Setting/SettingModal/Setting';
import UploadImage from 'components/Setting/Upload/UploadImage';
import FormSetting from 'components/Setting/Form/FormSetting';

export const UserLogo = () => {
  const { name, avatarURL } = useAuth().user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);

  const handleOpenModal = setState => setState(true);
  const handleCloseModal = setState => setState(false);

  return (
    <>
      <ModalWrap>
        <WrapperBtn
          type="button"
          onClick={() => handleOpenModal(setModalIsOpen)}
        >
          <p>{name}</p>
          <ThumbImg src={avatarURL} alt="logoUser" />
          <svg width="16" height="16" fill="#407BFF">
            <use href={Icons + '#arrow-down'}></use>
          </svg>
        </WrapperBtn>
        <ModalHeader
          isOpen={modalIsOpen}
          onOpenSettingModal={() => handleOpenModal(setIsOpenSettingModal)}
          onOpenLogoutModal={() => handleOpenModal(setIsOpenLogoutModal)}
          onClose={() => handleCloseModal(setModalIsOpen)}
        />
      </ModalWrap>
      <Setting
        isOpen={isOpenSettingModal}
        onClose={() => handleCloseModal(setIsOpenSettingModal)}
      >
        <UploadImage />
        <FormSetting />
      </Setting>
      <UserLogoutModal
        isOpen={isOpenLogoutModal}
        onClose={() => handleCloseModal(setIsOpenLogoutModal)}
      />
    </>
  );
};
