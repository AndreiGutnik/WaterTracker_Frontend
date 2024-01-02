import styled from 'styled-components';

// import backgroundMobile from '../../images/welcome/backgroundMobile.svg';
// import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundDesctop from '../../images/welcome/backgroundDesctop.svg';

export const SignInSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  background-position: top center;
  /* background-image: url(); */
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (max-width: 1439px) {
    background-size: contain;
  }

  @media screen and (min-width: 768px) {
    /* background-image: url(); */
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesctop});
    width: calc(100% - 36px);
  }
`;
