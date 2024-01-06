import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 320px;
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  outline: 1px solid red;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 50px 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 81px;
    width: 1440px;
    padding: 0 18px 109px 18px;
  }
`;
