import styled from 'styled-components';
import bottleDesk1x from '../../images/home/bottle-desk-1x.png';
import bottleDesk2x from '../../images/home/bottle-desk-2x.png';
import bottleMob1x from '../../images/home/bottle-mob-1x.png';
import bottleMob2x from '../../images/home/bottle-mob-2x.png';
import bottleTab1x from '../../images/home/bottle-tab-1x.png';
import bottleTab2x from '../../images/home/bottle-tab-2x.png';

export const BackgroundStyle = styled.section`
  min-height: calc(100vh - 119px);
  background-size: cover;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url(${bottleMob1x});

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-positon: left;
    background-image: url(${bottleMob2x});
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bottleTab1x});
  }
  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bottleTab2x});
  }
  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    background-image: url(${bottleDesk1x});
  }
  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bottleDesk2x});
  }
`;

export default BackgroundStyle;
