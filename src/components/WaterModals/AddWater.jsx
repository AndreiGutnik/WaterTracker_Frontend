import {
  CloseBtn,
  Modal,
  ModalHead,
  ModalHeader,
  SmallHeader,
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
    <Modal ref={modalRef}>
      <ModalHead>
        <ModalHeader>Add water</ModalHeader>
        <CloseBtn onClick={() => dispatch(closeModal())}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CloseBtn>
      </ModalHead>
      <SmallHeader>Choose a value:</SmallHeader>
      <WaterEditorForm />
    </Modal>
  );
};
