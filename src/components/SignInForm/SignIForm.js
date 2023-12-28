import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import {
  BackgroundImg,
  SightUp,
  ErMsg,
  FormBtnStyled,
  SightInContainer,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
} from '../RegistrationForm/RegistrationForm.styled.js';
import sprite from '../../images/sprite.svg';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <BackgroundImg>
      <SightInContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <StyledForm>
              <h2>Sign in</h2>

              <Styledlabel>Enter your email</Styledlabel>
              <StyledField
                type="email"
                name="email"
                placeholder="E-mail"
                error={!!(touched.email && errors.email)}
              />
              <ErMsg name="email" component="div" />

              <Styledlabel>
                Enter your password
                <StyledBtn onClick={() => setShowPassword(!showPassword)}>
                  <svg>
                    <use
                      href={sprite + (showPassword ? '#eye-show' : '#eye-hide')}
                    ></use>
                  </svg>
                </StyledBtn>
              </Styledlabel>
              <StyledField
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                error={!!(touched.password && errors.password)}
              />
              <ErrorMessage name="password" component="div" />

              <FormBtnStyled type="submit" disabled={isSubmitting}>
                Sign in
              </FormBtnStyled>
              <SightUp onClick={() => navigate('/signup')}>Sign up</SightUp>
            </StyledForm>
          )}
        </Formik>
      </SightInContainer>
    </BackgroundImg>
  );
};

export default SignInForm;
