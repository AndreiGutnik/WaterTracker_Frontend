import styled from 'styled-components';

import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundMobile from '../../images/welcome/backgroundMobile.svg';

export const PageContainer = styled.div`
  height: 90vh;

  @media screen and (min-width: 768px) {
    height: 92vh;
  }
`;

export const SignUpSection = styled.section`
  width: 100%;
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    z-index: -2;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 18px;
  }
`;

export const BubblesContainer = styled.div`
  background-position: center 28px;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
    background-size: 100%;
    background-size: contain;
    background-repeat: repeat;
  }
`;
