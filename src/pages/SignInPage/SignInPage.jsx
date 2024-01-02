import React from 'react';
import SignInForm from 'components/SignInForm/SignIForm';
import { SignInSection } from './SignInPage.styled';
import { Container } from 'components/Container';

const SignInPage = () => {
  return (
    <SignInSection>
      <Container>
        <SignInForm />
      </Container>
    </SignInSection>
  );
};

export default SignInPage;
