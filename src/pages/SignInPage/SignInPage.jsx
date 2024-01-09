import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import { SignInSection } from './SignInPage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/auth.selectors';
import Loader from 'components/Loader/Loader';

const SignInPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <SignInSection>
      <SignInForm />
      {isLoading && <Loader />}
    </SignInSection>
  );
};

export default SignInPage;
