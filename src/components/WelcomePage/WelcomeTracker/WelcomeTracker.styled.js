import styled from 'styled-components';
import bg_mb1x from '../../../../src/images/welcome/bg-mb1x.png';
import bg_mb2x from '../../../../src/images/welcome/bg-mb2x.png';
import bg_tb1x from '../../../../src/images/welcome/bg-tb1x.png';
import bg_tb2x from '../../../../src/images/welcome/bg-tb2x.png';
import bg_dt1x from '../../../../src/images/welcome/bg-dt1x.png';
import bg_dt2x from '../../../../src/images/welcome/bg-dt2x.png';

export const WelcomeTrackerStile = styled.section`
  min-height: calc(100vh - 119px);
  background-image: url(${bg_mb1x});
  background-size: cover;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  min-height: 100%;
  inset: 0;
  background-size: 100%;
  
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_mb2x});
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: calc(100vh - 143px);
    background-image: url(${bg_tb1x});
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bg_tb2x});
  }
  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    min-height: calc(100vh - 121px);
    background-image: url(${bg_dt1x});
  }
  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bg_dt2x});
  }
`;
