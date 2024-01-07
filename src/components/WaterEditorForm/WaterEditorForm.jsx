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
  InputTimeLabel,
  InputVolumeLabel,
  VolumeInput,
  AmountLabel,
  SaveVolumeDiv,
  FormContainer,
  TimeSelect,
} from './WaterEditorForm.styled';
import sprite from '../../images/sprite.svg';
import { addWater, editWater } from 'redux/water/operations';
import { closeModal } from 'redux/modals/modalsSlice';
import modalConstants from 'redux/modals/modalСonstants';
import { selectModalType, selectModalWater } from 'redux/modals/selectors';
import { selectTodayWater } from 'redux/water/selectors';

const ONE_TIME_LIMIT = 2000;
const STEP_ADD = 50;

const getTimeOptions = () => {
  const options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 5) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      const minute = j < 10 ? `0${j}` : `${j}`;
      options.push({
        value: `${hour}:${minute}`,
        label: `${hour}:${minute}`,
      });
    }
  }
  return options;
};

const getNowTime = date => {
  const now = date ? new Date(date) : new Date();
  const minutes = now.getMinutes();
  const roundedMinutes = Math.ceil(minutes / 5) * 5;
  now.setMinutes(roundedMinutes);
  now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return now;
};

export const WaterEditorForm = () => {
  const dispatch = useDispatch();

  const { _id, date, amountWater } = useSelector(selectModalWater);

  const now = getNowTime(date);
  const nowTime =
    `${now.getHours()}`.padStart(2, '0') +
    ':' +
    `${now.getMinutes()}`.padStart(2, '0');

  const [selectedTime, setSelectedTime] = useState({
    value: nowTime,
    label: nowTime,
  });

  const handleChangeTime = selectedOption => {
    setSelectedTime(selectedOption);
  };

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

  const handleFocus = e => {
    e.target.value = '';
  };

  const handleChange = e => {
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

  const handleBlur = e => {
    if (!e.target.value) {
      e.target.value = volume;
      return;
    }

    const val = parseInt(e.target.value, 10);
    if (val >= 0 && val <= ONE_TIME_LIMIT) {
      setVolume(val);
    }
  };

  const onMenuOpen = () => {
    requestAnimationFrame(() => {
      const selectedEl = document.querySelector(
        '.MyDropdown__option--is-selected'
      );
      if (selectedEl) {
        selectedEl.scrollIntoView({
          block: 'nearest',
          inline: 'start',
        });
      }
    });
  };

  const handleSubmit = () => {
    const inputTime = selectedTime.value.split(':');
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
        initialValues={{ amountWater: tempVolume }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
          dispatch(closeModal());
        }}
        autoComplete="off"
      >
        <FormContainer>
          <InputTimeLabel>
            Recording time:
            <TimeSelect
              classNamePrefix={'MyDropdown'}
              options={getTimeOptions()}
              onMenuOpen={onMenuOpen}
              value={selectedTime}
              defaultValue={selectedTime.value}
              onChange={handleChangeTime}
            />
          </InputTimeLabel>
          <InputVolumeLabel>
            Enter the value of the water used:
            <VolumeInput
              name="amountWater"
              type="number"
              value={tempVolume}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </InputVolumeLabel>
          <SaveVolumeDiv>
            <AmountLabel>{volume}ml</AmountLabel>
            <SaveBtn type="submit">
              <span>Save</span>
            </SaveBtn>
          </SaveVolumeDiv>
        </FormContainer>
      </Formik>
    </>
  );
};
