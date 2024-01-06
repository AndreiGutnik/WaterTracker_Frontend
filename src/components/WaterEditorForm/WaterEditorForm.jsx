import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  AmountContainer,
  AmountDiv,
  AmountSpan,
  PlusMinusBtn,
  SaveBtn,
  InputText,
  InputTimeLable,
  InputVolumeLable,
  TimeVolumeInput,
  AmountLable,
  SaveVolumeDiv,
  FormContainer,
} from './WaterEditorForm.styled';
import sprite from '../../images/sprite.svg';
import { addWater, editWater } from 'redux/water/operations';
import { closeModal } from 'redux/modals/modalsSlice';
import modalConstants from 'redux/modals/modalСonstants';
import { selectModalType, selectModalWater } from 'redux/modals/selectors';
import { selectTodayWater } from 'redux/water/selectors';

export const WaterEditorForm = () => {
  const ONE_TIME_LIMIT = 2000;
  const STEP_ADD = 50;

  const dispatch = useDispatch();

  const { _id, date, amountWater } = useSelector(selectModalWater);
  let startAmount = amountWater;

  const isAdd = useSelector(selectModalType);
  const { waterNotes } = useSelector(selectTodayWater);
  if (isAdd === modalConstants.ADD_WATER) {
    const nRecords = waterNotes.length;
    if (nRecords > 0) {
      startAmount = waterNotes[nRecords - 1].amountWater;
    }
  }

  const modal = useSelector(selectModalType);

  const [volume, setVolume] = useState(startAmount);

  const [tempVolume, setTempVolume] = useState(volume);

  const timeFromDate = date => {
    const currentdate = date ? new Date(date) : new Date();
    return new Date(currentdate).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const increment = () => {
    if (volume >= ONE_TIME_LIMIT) {
      return;
    }
    setVolume(volume + STEP_ADD);
    setTempVolume(tempVolume + STEP_ADD);
  };

  const decrement = () => {
    if (volume <= STEP_ADD) {
      return;
    }
    setVolume(volume - STEP_ADD);
    setTempVolume(tempVolume - STEP_ADD);
  };

  const handleSubmit = ({ time }) => {
    const inputTime = time.split(':');
    const currentdate = new Date();
    currentdate.setHours(inputTime[0], inputTime[1]);
    const setDate = currentdate.toISOString();

    if (modal === modalConstants.ADD_WATER) {
      dispatch(addWater({ amountWater: volume, date: setDate }));
    }
    if (modal === modalConstants.EDIT_WATER) {
      dispatch(editWater({ _id, amountWater: volume, date: setDate }));
    }
  };

  const handelFocus = e => {
    e.target.value = '';
  };

  const handelChange = e => {
    if (!e.target.value) {
      e.target.value = '';
      setTempVolume(null);
      return;
    }
    if (e.target.value > ONE_TIME_LIMIT) {
      e.target.value = ONE_TIME_LIMIT;
    }
    const val = parseInt(e.target.value, 10);
    setTempVolume(val);
  };

  const handelBlur = e => {
    if (!e.target.value) {
      e.target.value = volume;
      return;
    }

    const val = parseInt(e.target.value, 10);
    if (val >= 0 && val <= ONE_TIME_LIMIT) {
      setVolume(val);
    }
  };

  return (
    <>
      <InputText>Amount of water:</InputText>
      <AmountContainer>
        <PlusMinusBtn onClick={decrement}>
          <svg>
            <use href={sprite + '#minus'}></use>
          </svg>
        </PlusMinusBtn>
        <AmountDiv>
          <AmountSpan>{volume}ml</AmountSpan>
        </AmountDiv>
        <PlusMinusBtn onClick={increment}>
          <svg>
            <use href={sprite + '#plus'}></use>
          </svg>
        </PlusMinusBtn>
      </AmountContainer>

      <Formik
        initialValues={{ time: timeFromDate(date), amountWater: tempVolume }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
          dispatch(closeModal());
        }}
        autoComplete="off"
      >
        <FormContainer>
          <InputTimeLable>
            Recording time:
            <TimeVolumeInput name="time" type="time" step="300" />
          </InputTimeLable>
          <InputVolumeLable>
            Enter the value of the water used:
            <TimeVolumeInput
              name="amountWater"
              type="number"
              value={tempVolume}
              onFocus={handelFocus}
              onBlur={handelBlur}
              onChange={handelChange}
            />
          </InputVolumeLable>
          <SaveVolumeDiv>
            <AmountLable>{volume}ml</AmountLable>
            <SaveBtn type="submit">
              <span>Save</span>
            </SaveBtn>
          </SaveVolumeDiv>
        </FormContainer>
      </Formik>
    </>
  );
};
