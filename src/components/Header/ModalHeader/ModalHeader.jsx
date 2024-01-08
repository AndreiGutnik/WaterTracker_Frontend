import { useEffect } from 'react';
import { Button, ModalWrapper, ModalOverlay } from './ModalHeader.styled';
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
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <>
          <ModalOverlay onClick={onClose} />
          <ModalWrapper onClick={e => e.stopPropagation()}>
            <Button
              type="button"
              onClick={() => {
                onClose();
                onOpenSettingModal();
              }}
            >
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
        </>
      )}
    </>
  );
};
