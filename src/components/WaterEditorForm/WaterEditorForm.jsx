import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  AmountContainer,
  AmountDiv,
  AmountSpan,
  PlusMinusBtn,
  SaveBtn,
} from './WaterEditorForm.styled';
import sprite from '../../images/sprite.svg';
import { addWater, editWater } from 'redux/water/operations';
import { closeModal } from 'redux/modals/modalsSlice';
import modalConstants from 'redux/modals/modalСonstants';
import { selectModalType, selectModalWater } from 'redux/modals/selectors';
import { TimeInput } from 'components/WaterModals/WaterModals.styled';

export const WaterEditorForm = () => {
  const dispatch = useDispatch();

  const { _id, date, amountWater } = useSelector(selectModalWater);
  const modal = useSelector(selectModalType);

  const [volume, setVolume] = useState(amountWater);

  const currentdate = date ? new Date(date) : new Date();
  console.log('New time: ', currentdate);
  const datetime = currentdate.getHours() + ':' + currentdate.getMinutes(); //TODO no zero at the front
  console.log('datetime', datetime);

  const increment = () => {
    if (volume >= 2000) {
      return;
    }
    setVolume(volume + 50);
  };

  const decrement = () => {
    if (volume <= 50) {
      return;
    }
    setVolume(volume - 50);
  };

  const changeValue = event => {
    const val = parseInt(event.target.value);
    if (val >= 0 && val <= 2000) {
      setVolume(val);
    }
  };

  const handleSubmit = ({ time }) => {
    const inputTime = time.split(':');
    currentdate.setHours(inputTime[0], inputTime[1]);
    const date = currentdate.toISOString();
    // console.log('currentdate', currentdate);
    // console.log('Send date - ', date);   // TO FIX  '2023-12-28T21:32:06.164Z'

    if (modal === modalConstants.ADD_WATER) {
      dispatch(addWater({ amountWater: volume, date }));
    }
    if (modal === modalConstants.EDIT_WATER) {
      dispatch(editWater({ _id, amountWater: volume, date }));
    }
  };

  return (
    <>
      <p>Amount of water:</p>
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
        initialValues={{ time: currentdate, amountWater: volume }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
          dispatch(closeModal());
        }}
        autoComplete="off"
      >
        <Form>
          <label>
            Recording time:
            <TimeInput name="time" type="time" />
          </label>
          <label>
            Enter the value of the water used:
            <Field
              name="amountWater"
              type="number"
              value={volume}
              onChange={changeValue}
            />
          </label>
          <label>{volume}ml</label>
          <SaveBtn type="submit">
            <span>Save</span>
          </SaveBtn>
        </Form>
      </Formik>
    </>
  );
};
