import {
  CloseBtn,
  Modal,
  ModalContainer,
  ModalHead,
  ModalHeader,
  SmaleHeader,
} from './WaterModals.styled';
import sprite from '../../images/sprite.svg';
import { WaterEditorForm } from 'components/WaterEditorForm/WaterEditorForm';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modals/modalsSlice';
import { useRef } from 'react';
import { useModalClose } from 'hooks/useModal';

export const AddWater = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  useModalClose(modalRef);

  return (
    <ModalContainer>
      <Modal ref={modalRef}>
        <ModalHead>
          <ModalHeader>Add water</ModalHeader>
          <CloseBtn onClick={() => dispatch(closeModal())}>
            <svg>
              <use href={sprite + '#close'}></use>
            </svg>
          </CloseBtn>
        </ModalHead>
        <SmaleHeader>Choose a value:</SmaleHeader>
        <WaterEditorForm />
      </Modal>
    </ModalContainer>
  );
};
