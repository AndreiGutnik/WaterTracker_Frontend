import styled from 'styled-components';

import bg_mb1x from '../../../src/images/welcome/bg-mb1x.png';
import bg_mb2x from '../../../src/images/welcome/bg-mb2x.png';
import bg_tb1x from '../../../src/images/welcome/bg-tb1x.png';
import bg_tb2x from '../../../src/images/welcome/bg-tb2x.png';
import bg_dt1x from '../../../src/images/welcome/bg-dt1x.png';
import bg_dt2x from '../../../src/images/welcome/bg-dt2x.png';
import backgroundMobile from '../../images/welcome/backgroundMobile.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';

export const WelcomeContainer = styled.div`
  width: 320px;
  min-height: calc(100vh - 80px);
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  outline: 1px solid blue;
  background-image: url(${backgroundMobile}), url(${bg_mb1x});
  background-size: cover;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundMobile}), url(${bg_mb2x});
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;

    padding: 0 32px 50px 32px;
    min-height: calc(100vh - 88px);
    background-image: url(${backgroundTablet}), url(${bg_tb1x});
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundTablet}), url(${bg_tb2x});
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 81px;
    width: 1440px;
    padding: 0 18px 109px 18px;
    padding-top: 40px;
    min-height: calc(100vh - 80px);
    background-image: url(${backgroundDesktop}), url(${bg_dt1x});
  }
  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundDesktop}), url(${bg_dt2x});
  }
`;
