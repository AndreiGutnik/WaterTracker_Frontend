import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import { useNavigate, Link } from 'react-router-dom';
import { SignInButton } from 'pages/SignInPage/SignInPage.styled';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values;

      const registrationSuccess = await dispatch(logIn({ email, password }));

      if (registrationSuccess) {
        toast.success('Registration successful!');
        navigate('/homepage');
      } else {
        toast.error(
          'Registration failed. Please check your details and try again.'
        );
      }
    } catch (error) {
      toast.error(
        'An error occurred during registration. Please try again later.'
      );
    } finally {
      setSubmitting(false);
    }
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
