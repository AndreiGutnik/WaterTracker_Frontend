import {
  CloseBtn,
  DivLogoutBtn,
  ModalLogout,
  ModalHead,
  ModalHeader,
  SmaleLogoutHeader,
  ModalOverlay,
} from './UserLogoutModal.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useEffect } from 'react';

export const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

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
  }, []);

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalLogout>
            <ModalHead>
              <ModalHeader>Log out</ModalHeader>
              <CloseBtn onClick={onClose}>
                <svg>
                  <use href={sprite + '#close'}></use>
                </svg>
              </CloseBtn>
            </ModalHead>

            <SmaleLogoutHeader>Do you really want to leave?</SmaleLogoutHeader>
            <DivLogoutBtn>
              <button onClick={() => dispatch(logOut())}>Log out</button>
              <button onClick={onClose}>Cancel</button>
            </DivLogoutBtn>
          </ModalLogout>
        </ModalOverlay>
      )}
    </>
  );
};
