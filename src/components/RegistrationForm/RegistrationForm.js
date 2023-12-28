import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import { SignUpButton } from 'pages/SignUpPage/SignUpPage.styled';
import { SignUpForm } from 'pages/SignUpPage/SignUpPage.styled';
import { SignUpItems } from 'pages/SignUpPage/SignUpPage.styled';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    dispatch(
      register({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <SignUpForm>
            <SignUpItems>Enter your email</SignUpItems>
            <Field type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" component="div" />

            <SignUpItems>Enter your password</SignUpItems>
            <Field type="password" name="password" placeholder="Password" />

            <ErrorMessage name="password" component="div" />

            <SignUpItems>Repeat Password</SignUpItems>
            <Field
              type="password"
              name="repeatPassword"
              placeholder="Repeat your password"
            />
            <ErrorMessage name="repeatPassword" component="div" />
          </SignUpForm>

          <SignUpButton type="submit" disabled={isSubmitting}>
            Sign Up
          </SignUpButton>
          <Link to="/signin">Sign In</Link>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
