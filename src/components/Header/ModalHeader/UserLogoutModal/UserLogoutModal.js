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
        <ModalHeader>Delete entry</ModalHeader>
        <CloseBtn onClick={() => {}}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CloseBtn>
      </ModalHead>

      <SmaleDeleteHeader>
        Are you sure you want to delete the entry?
      </SmaleDeleteHeader>
      <DivDeleteBtn>
        <button onClick={() => {}}>Delete</button>
        <button onClick={() => {}}>Cancel</button>
      </DivDeleteBtn>
    </ModalDelete>
  );
};
