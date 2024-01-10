import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import {
  BubblesContainer,
  PageContainer,
  SignInSection,
} from './SignInPage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/auth.selectors';
import Loader from 'components/Loader/Loader';

const SignInPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <BubblesContainer>
      <PageContainer>
        <SignInSection>
          <SignInForm />
          {isLoading && <Loader />}
        </SignInSection>
      </PageContainer>
    </BubblesContainer>
  );
};

export default SignInPage;
