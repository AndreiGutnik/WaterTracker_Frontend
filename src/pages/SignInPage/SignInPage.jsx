import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import { SignInSection } from './SignInPage.styled';

const SignInPage = () => {
  return (
    <SignInSection>
      <SignInForm />
    </SignInSection>
  );
};

export default SignInPage;
