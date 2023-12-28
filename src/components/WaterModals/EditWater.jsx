import {
  CloseBtn,
  Modal,
  ModalHead,
  ModalHeader,
  SmaleHeader,
} from './WaterModals.styled';
import sprite from '../../images/sprite.svg';
import { WaterEditorForm } from 'components/WaterEditorForm/WaterEditorForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modals/modalsSlice';
import { useRef } from 'react';
import { useModalClose } from 'hooks/useModal';
import {
  InfoWrap,
  TextTime,
  TextVolume,
} from 'components/TodayWaterList/TodayList.styled';
import { selectModalWater } from 'redux/modals/selectors';

export const EditWater = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  useModalClose(modalRef);
  const { date, amountWater } = useSelector(selectModalWater);

  return (
    <Modal ref={modalRef}>
      <ModalHead>
        <ModalHeader>Edit the entered amount of water</ModalHeader>
        <CloseBtn onClick={() => dispatch(closeModal())}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CloseBtn>
      </ModalHead>
      <InfoWrap>
        <svg>
          <use href={sprite + '#cup'}></use>
        </svg>
        <TextVolume>{amountWater} ml</TextVolume>
        <TextTime>{date}</TextTime>
      </InfoWrap>
      <SmaleHeader>Correct entered data:</SmaleHeader>
      <WaterEditorForm />
    </Modal>
  );
};
