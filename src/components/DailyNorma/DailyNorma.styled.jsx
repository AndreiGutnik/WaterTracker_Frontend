import styled from 'styled-components';
import { color } from './utils/colors';

import bottleDesk1x from '../../images/home/bottle-desk1x.png';
import bottleDesk2x from '../../images/home/bottle-desk2x.png';
import bottleTab1x from '../../images/home/bottle-tab-1x.png';
import bottleTab2x from '../../images/home/bottle-tab-2x.png';
import bottleMob1x from '../../images/home/bottle-mob-1x.png';
import bottleMob2x from '../../images/home/bottle-mob-2x.png';

import backgroundDesktop from '../../images/welcome/backgroundDesktop.svg';
import backgroundTablet from '../../images/welcome/backgroundTablet.svg';
import backgroundMobile from '../../images/welcome/backgroundMobile.svg';

export const DailyNormaContainer = styled.div`
  width: 280px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 625px;
  }
`;

export const MyDailyNormaContainer = styled.div`
  width: 164px;
  height: 74px;
  margin-bottom: 8px;
  padding: 8px 20px 8px 20px;
  border-radius: 10px;
  border: 1px solid ${color.secondary.white};
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 8px 4px rgba(158, 187, 255, 0.12);

  @media screen and (min-width: 768px) {
    position: absolute;
    height: 76px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 30px;
  }
`;

export const DailyNormaHeader = styled.p`
  width: 124px;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
`;
export const DailyNormaContainerWaterStat = styled.div`
  display: flex;
  gap: 12px;
`;

export const DailyNormaWaterNorma = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  color: ${color.primary.blue};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DailyNormaButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  line-height: calc(20 / 16);
  border: none;
  background-color: transparent;
  color: ${color.secondary.azure};
`;

export const DailyNormaBackground = styled.div`
  width: 280px;
  height: 208px;
  background-image: url(${bottleMob1x});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bottleMob2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 518px;
    height: 386px;
    background-image: url(${bottleTab1x});
    margin-top: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bottleTab2x});
  }

  @media screen and (min-width: 1440px) {
    /* position: static;
    margin: 0 auto; */
    width: 625px;
    min-height: 548px;
    background-image: url(${bottleDesk1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bottleDesk2x});
  }
`;

export const DNBGContainer = styled.section`
  position: relative;
  background-position: top center;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  /* @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
  } */
`;
