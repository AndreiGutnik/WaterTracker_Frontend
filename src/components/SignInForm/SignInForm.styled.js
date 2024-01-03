import styled from 'styled-components';
import bottleDesk1x from '../../images/home/bottle-desk-1x.png';
import bottleDesk2x from '../../images/home/bottle-desk-2x.png';
import bottleMob1x from '../../images/home/bottle-mob-1x.png';
import bottleMob2x from '../../images/home/bottle-mob-2x.png';
import bottleTab1x from '../../images/home/bottle-tab-1x.png';
import bottleTab2x from '../../images/home/bottle-tab-2x.png';

export const BottleImg = styled.div`
  margin-top: 66px;
  background-image: url(${bottleMob1x});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bottleMob2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 0;
    width: 736px;
    height: 548px;
    background-position: 80px;
    background-image: url(${bottleTab1x});
    z-index: -1;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bottleTab2x});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    position: static;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
    background-image: url(${bottleDesk1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bottleDesk2x});
  }
`;
