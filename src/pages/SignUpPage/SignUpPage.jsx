import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import {
  BubblesContainer,
  PageContainer,
  SignUpSection,
} from './SignUpPage.styled';

import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/auth.selectors';

const SignUpPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <BubblesContainer>
      <PageContainer>
        <SignUpSection>
          <RegistrationForm />
          {isLoading && <Loader />}
        </SignUpSection>
      </PageContainer>
    </BubblesContainer>
  );
};

export default SignUpPage;
