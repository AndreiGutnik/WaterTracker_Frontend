import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  outline: 1px solid red;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 112px;
  }
`;

export const WaterTracker = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;
