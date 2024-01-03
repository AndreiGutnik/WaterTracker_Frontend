import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import {
  SignUpContainer,
  SightUp,
  ErMsg,
  FormBtnStyled,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
} from '../RegistrationForm/RegistrationForm.styled.js';
import { BottleImg } from '../SignInForm/SignInForm.styled.js';
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
    <SignUpContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <StyledForm>
            <h2>Sign in</h2>

            <Styledlabel htmlFor="email">Enter your email</Styledlabel>
            <StyledField
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              error={touched.email && errors.email ? 'true' : 'false'}
              autoComplete="email"
            />
            <ErMsg name="email" component="div" />

            <Styledlabel htmlFor="password">
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
              id="password"
              placeholder="Password"
              error={touched.password && errors.password ? 'true' : 'false'}
              autoComplete="current-password"
            />
            <ErMsg name="password" component="div" />

            <FormBtnStyled type="submit" disabled={isSubmitting}>
              Sign in
            </FormBtnStyled>
            <SightUp onClick={() => navigate('/signup')}>Sign up</SightUp>
          </StyledForm>
        )}
      </Formik>
      <BottleImg />
    </SignUpContainer>
  );
};

export default SignInForm;
