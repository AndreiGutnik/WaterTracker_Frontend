import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import { SignInButton } from 'pages/SignInPage/SignInPage.styled';

const SignInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(logIn(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Enter your email</label>
          <Field type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label>Enter your password</label>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <SignInButton type="submit">Sign in</SignInButton>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </Formik>
  );
};

export default SignInForm;
