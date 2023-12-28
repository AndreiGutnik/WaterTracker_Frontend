import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import BackgroundStyle from './Background.styled';
const SignUpPage = () => {
  return (
    <BackgroundStyle>
      <h2>Sign up</h2>
      <RegistrationForm />
    </BackgroundStyle>
  );
};

export default SignUpPage;
