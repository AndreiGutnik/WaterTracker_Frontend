import { useEffect, useState } from 'react';
import { Button, ModalWrapper } from './ModalHeader.styled';
import Icons from '../../../images/sprite.svg';

export const ModalHeader = ({
  isOpen,
  onOpenSettingModal,
  onOpenLogoutModal,
  onClose,
}) => {
  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);
    // document.addEventListener('mouseup', onClose);
    return () => {
      document.removeEventListener('keydown', close);
      // document.removeEventListener('mouseup', onClose);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <ModalWrapper onBlur={onClose}>
          <Button type="button" onClick={onOpenSettingModal}>
            <svg width="16" height="16">
              <use href={Icons + '#settings'}></use>
            </svg>
            <p>Setting</p>
          </Button>
          <Button
            type="button"
            onClick={() => {
              onClose();
              onOpenLogoutModal();
            }}
          >
            <svg width="16" height="16">
              <use href={Icons + '#logout'}></use>
            </svg>
            <p>Log out</p>
          </Button>
        </ModalWrapper>
      )}
    </>
  );
};
