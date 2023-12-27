import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  AmountContainer,
  AmountDiv,
  AmountSpan,
  PlusMinusBtn,
  SaveBtn,
} from './WaterEditorForm.styled';
import sprite from '../../images/sprite.svg';
import { addWater } from 'redux/water/operations';
import { closeModal } from 'redux/modals/modalsSlice';

export const WaterEditorForm = () => {
  const dispatch = useDispatch();
  const [volume, setVolume] = useState(50);

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

  const currentdate = new Date();
  const datetime = currentdate.getHours() + ':' + currentdate.getMinutes();

  const handleSubmit = ({ time }) => {
    const inputTime = time.split(':');
    currentdate.setHours(inputTime[0], inputTime[1]);
    const date = currentdate.toISOString();
    // console.log('currentdate', currentdate);
    // console.log('Send date - ', date);   // TO FIX
    dispatch(addWater({ amountWater: volume, date }));
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
        initialValues={{ time: datetime, amountWater: volume }}
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
            <Field name="time" type="time" />
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
