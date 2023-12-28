import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/operations';
import { useNavigate, Link } from 'react-router-dom';
import { SignUpButton } from 'pages/SignUpPage/SignUpPage.styled';
import { SignUpForm } from 'pages/SignUpPage/SignUpPage.styled';
import { SignUpItems } from 'pages/SignUpPage/SignUpPage.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password, repeatPassword } = values;

    const registrationSuccess = await dispatch(register({ email, password }));

    if (registrationSuccess) {
      toast.success('Registration successful!');
      navigate('/signin');
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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

        <SignUpButton type="submit">Sign Up</SignUpButton>
        <Link to="/signin"></Link>

        <Link to="/signin">Sign In</Link>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
