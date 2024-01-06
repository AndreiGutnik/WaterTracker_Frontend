import {
  CloseBtn,
  DivDeleteBtn,
  ModalDelete,
  ModalHead,
  ModalHeader,
  SmaleDeleteHeader,
} from './UserLogoutModal.styled';
import sprite from '../../../../images/sprite.svg';

export const UserLogoutModal = () => {
  return (
    <ModalDelete>
      <ModalHead>
        <ModalHeader>Log out</ModalHeader>
        <CloseBtn onClick={() => {}}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CloseBtn>
      </ModalHead>

      <SmaleDeleteHeader>Do you really want to leave?</SmaleDeleteHeader>
      <DivDeleteBtn>
        <button onClick={() => {}}>Log out</button>
        <button onClick={() => {}}>Cancel</button>
      </DivDeleteBtn>
    </ModalDelete>
  );
};
