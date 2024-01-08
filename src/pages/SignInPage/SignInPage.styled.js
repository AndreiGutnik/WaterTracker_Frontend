import styled from 'styled-components';

import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundMobile from '../../images/welcome/backgroundMobile.svg';

export const SignInSection = styled.section`
  background-position: top center;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-position: top 25px right 0;
  width: 100%;
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    background-image: url(${backgroundTablet});
    background-position: center;
    z-index: -2;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 18px;
    background-image: url(${backgroundDesktop});
  }
`;
