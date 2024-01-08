import { useEffect } from 'react';
import Icons from '../../../images/sprite.svg';
import {
  ModalSetting,
  HeaderSettingModal,
  HeaderSettingName,
  ButtonClose,
  WrapperModalSetting,
  ModalOverlay,
} from './Setting.styled';

const Setting = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalSetting onClick={e => e.stopPropagation()}>
            <HeaderSettingModal>
              <HeaderSettingName>Setting</HeaderSettingName>
              <ButtonClose onClick={onClose}>
                <svg>
                  <use href={Icons + '#close'}></use>
                </svg>
              </ButtonClose>
            </HeaderSettingModal>
            <WrapperModalSetting>{children}</WrapperModalSetting>
          </ModalSetting>
        </ModalOverlay>
      )}
    </>
  );
};

export default Setting;
