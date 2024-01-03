import styled from 'styled-components';

import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundMobile from '../../images/welcome/backgroundMobile.svg';

export const SignInSection = styled.section`
  background-position: top center;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
  }
`;
