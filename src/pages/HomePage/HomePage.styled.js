import { baseTheme } from 'components/theme';
import styled from 'styled-components';

import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundMobile from '../../images/welcome/backgroundMobileHome.svg';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const DailyNormaSection = styled.div``;

export const TrackerContainer = styled.div`
  margin-bottom: 40px;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;
  background: ${baseTheme.colors.grey};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 592px;
    height: 680px;
  }
`;

export const BubblesContainer = styled.div`
  position: relative;
  background-position: center 28px;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
    background-position: center 38px;
  }
`;
