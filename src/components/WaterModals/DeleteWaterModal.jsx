import { useDispatch, useSelector } from 'react-redux';
import { CloseBtn, Modal } from './WaterModals.styled';
import { useRef } from 'react';
import { useModalClose } from 'hooks/useModal';
import { closeModal } from 'redux/modals/modalsSlice';
import sprite from '../../images/sprite.svg';
import { deleteWter } from 'redux/water/operations';
import { selectModalIdWater } from 'redux/modals/selectors';

export const DeleteWaterModal = () => {
  const dispatch = useDispatch();
  const modaldeleteRef = useRef();
  useModalClose(modaldeleteRef);

  const _id = useSelector(selectModalIdWater);

  const onDelete = () => {
    dispatch(deleteWter(_id));
    dispatch(closeModal());
  };

  return (
    <Modal ref={modaldeleteRef}>
      <h3>Delete entry</h3>
      <CloseBtn onClick={() => dispatch(closeModal())}>
        <svg>
          <use href={sprite + '#close'}></use>
        </svg>
      </CloseBtn>
      <p>Are you sure you want to delete the entry?</p>
      <button onClick={() => onDelete()}>Delete</button>
      <button onClick={() => dispatch(closeModal())}>Cancel</button>
    </Modal>
  );
};
