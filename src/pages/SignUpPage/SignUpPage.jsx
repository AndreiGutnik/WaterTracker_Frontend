import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { SignUpSection } from './SignUpPage.styled';
import { Container } from 'components/Container';
const SignUpPage = () => {
  return (
    <SignUpSection>
      <Container>
        <RegistrationForm />
      </Container>
    </SignUpSection>
  );
};

export default SignUpPage;
