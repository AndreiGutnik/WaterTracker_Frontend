import {
  CloseBtn,
  InfoEditWrap,
  ModalEdit,
  ModalHead,
  ModalHeader,
  SmaleHeader,
  TextEditTime,
  TextEditVolume,
} from './WaterModals.styled';
import sprite from '../../images/sprite.svg';
import { WaterEditorForm } from 'components/WaterEditorForm/WaterEditorForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modals/modalsSlice';
import { useRef } from 'react';
import { useModalClose } from 'hooks/useModal';
import { selectModalWater } from 'redux/modals/selectors';

export const EditWater = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  useModalClose(modalRef);
  const { date, amountWater } = useSelector(selectModalWater);

  const timeFromDate = date => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <ModalEdit ref={modalRef}>
      <ModalHead>
        <ModalHeader>Edit the entered amount of water</ModalHeader>
        <CloseBtn onClick={() => dispatch(closeModal())}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CloseBtn>
      </ModalHead>
      <InfoEditWrap>
        <svg>
          <use href={sprite + '#cup'}></use>
        </svg>
        <TextEditVolume>{amountWater} ml</TextEditVolume>
        <TextEditTime>{timeFromDate(date)}</TextEditTime>
      </InfoEditWrap>
      <SmaleHeader>Correct entered data:</SmaleHeader>
      <WaterEditorForm />
    </ModalEdit>
  );
};
