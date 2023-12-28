import React, { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import validationSchema from '../schemas/validationSchema';
import FormInput from '../utils/FormInput/FormInput';
import Button from '../utils/Button/Button';
import Icon from '../utils/Icon/Icon';
import Modal from '../utils/Modal/Modal';
import {
  ModalBox,
  ModalHeader,
  CloseButton,
  GenderFormulas,
  ItemsGenders,
  Formulas,
  VolumeNorm,
  StyledForm,
  FormTitle,
  Genders,
  Required,
  L,
  SaveWrapper,
} from './DailyNormaModal.styled';
import { useContext } from 'react';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { useDispatch } from 'react-redux';
// import { updateDailyNorma } from '';
// import { useAuth } from '';

const DailyNormaModal = () => {
  const toggleModal = useContext(ModalContext);
  const dispatch = useDispatch();

  // const { user } = useAuth();

  const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);

  const calculateWaterAmount = useCallback(values => {
    const weightCoefficient = values.gender === 'female' ? 0.03 : 0.04;
    const timeCoefficient = values.gender === 'female' ? 0.4 : 0.6;
    const calculatedAmount =
      values.weight * weightCoefficient + values.activityTime * timeCoefficient;
    setCalculatedWaterAmount(calculatedAmount.toFixed(2));
  }, []);

  const handleInputChange = (e, fieldName) => {
    formik.handleChange(e);
    const inputText = e.target.value;
    let numericValue = parseFloat(inputText);
    if (isNaN(numericValue)) {
      numericValue = 0;
    }
    formik.setFieldValue(fieldName, numericValue);
  };

  const handleSubmit = async () => {
    dispatch(updateDailyNorma(formik.values.drankWaterAmount));
    formik.resetForm();
    toggleModal();
  };

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      weight: 0,
      activityTime: 0,
      drankWaterAmount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    calculateWaterAmount(formik.values);
  }, [calculateWaterAmount, formik.values]);

  const onClickModalClose = () => {
    toggleModal();
  };

  return (
    <Modal onClose={toggleModal}>
      <ModalBox>
        <>
          <ModalHeader>
            My daily norma
            <CloseButton onClick={onClickModalClose}>
              <Icon
                name="close"
                width={12}
                height={12}
                fill="#ffffff00"
                stroke="#407bff"
                className="icon"
              />
            </CloseButton>
          </ModalHeader>

          <GenderFormulas>
            <ItemsGenders>
              For girl:
              <Formulas> V=(M*0.03) + (T*0.4)</Formulas>
            </ItemsGenders>
            <ItemsGenders>
              For man:
              <Formulas> V=(M*0.04) + (T*0.6)</Formulas>
            </ItemsGenders>
          </GenderFormulas>

          <VolumeNorm>
            *V is the volume of the water norm in liters per day, M is your body
            weight, T is the time of active sports, or another type of activity
            commensurate in terms of loads (in the absence of these, you must
            set 0)
          </VolumeNorm>

          <StyledForm>
            <FormTitle>Calculate your rate:</FormTitle>

            <Genders>
              <label>
                <input
                  type="radio"
                  name="gender"
                  checked={formik.values.gender === 'female'}
                  onChange={() => formik.setFieldValue('gender', 'female')}
                />
                For girl
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  checked={formik.values.gender === 'male'}
                  onChange={() => formik.setFieldValue('gender', 'male')}
                />
                For man
              </label>
            </Genders>

            <FormInput
              label="Enter your weight in kilograms:"
              inputType="dailyNorma"
              value={formik.values.weight}
              onChange={e => handleInputChange(e, 'weight')}
              onBlur={formik.handleBlur}
              name="weight"
              error={formik.touched.weight && formik.errors.weight}
            />

            <FormInput
              label="Enter the time of active participation in sports or other
                activities with a high physical load:"
              inputType="dailyNorma"
              value={formik.values.activityTime}
              onChange={e => handleInputChange(e, 'activityTime')}
              onBlur={formik.handleBlur}
              name="activityTime"
              error={formik.touched.activityTime && formik.errors.activityTime}
            />

            <Required>
              <>The required amount of water in liters per day:</>
              <L>
                {isNaN(calculatedWaterAmount)
                  ? 'Invalid'
                  : `${calculatedWaterAmount} L`}
              </L>
            </Required>

            <FormInput
              label="Write down how much water you will drink:"
              inputType="dailyNorma"
              value={formik.values.drankWaterAmount}
              onChange={e => handleInputChange(e, 'drankWaterAmount')}
              onBlur={formik.handleBlur}
              name="drankWaterAmount"
              error={
                formik.touched.drankWaterAmount &&
                formik.errors.drankWaterAmount
              }
            />

            <SaveWrapper>
              <Button type="submit" onClick={handleSubmit}>
                Save
              </Button>
            </SaveWrapper>
          </StyledForm>
        </>
      </ModalBox>
    </Modal>
  );
};

export default DailyNormaModal;