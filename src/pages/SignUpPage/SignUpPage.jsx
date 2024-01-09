import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { SignUpSection } from './SignUpPage.styled';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/auth.selectors';

const SignUpPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <SignUpSection>
      <RegistrationForm />
      {isLoading && <Loader />}
    </SignUpSection>
  );
};

export default SignUpPage;
