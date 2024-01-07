import { useDispatch, useSelector } from 'react-redux';
import {
  CloseBtn,
  DivDeleteBtn,
  ModalDelete,
  ModalHead,
  ModalHeader,
  SmallDeleteHeader,
} from './WaterModals.styled';
import { useRef } from 'react';
import { useModalClose } from 'hooks/useModal';
import { closeModal } from 'redux/modals/modalsSlice';
import sprite from '../../images/sprite.svg';
import { deleteWater } from 'redux/water/operations';
import { selectModalIdWater } from 'redux/modals/selectors';

export const DeleteWaterModal = () => {
  const dispatch = useDispatch();
  const modaldeleteRef = useRef();
  useModalClose(modaldeleteRef);

  const _id = useSelector(selectModalIdWater);

  const onDelete = () => {
    dispatch(deleteWater(_id));
    dispatch(closeModal());
  };

  return (
    <ModalDelete ref={modaldeleteRef}>
      <ModalHead>
        <ModalHeader>Delete entry</ModalHeader>
        <CloseBtn onClick={() => dispatch(closeModal())}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CloseBtn>
      </ModalHead>

      <SmallDeleteHeader>
        Are you sure you want to delete the entry?
      </SmallDeleteHeader>
      <DivDeleteBtn>
        <button onClick={() => onDelete()}>Delete</button>
        <button onClick={() => dispatch(closeModal())}>Cancel</button>
      </DivDeleteBtn>
    </ModalDelete>
  );
};
