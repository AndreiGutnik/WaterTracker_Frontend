import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { SignUpSection } from './SignUpPage.styled';
const SignUpPage = () => {
  return (
    <SignUpSection>
      <RegistrationForm />
    </SignUpSection>
  );
};

export default SignUpPage;
