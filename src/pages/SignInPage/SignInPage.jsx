import React from 'react';
import SignInForm from 'components/SignInForm/SignIForm';
import { SignInSection } from './SignInPage.styled';

const SignInPage = () => {
  return (
    <SignInSection>
      <SignInForm />
    </SignInSection>
  );
};

export default SignInPage;
