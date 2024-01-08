import styled from 'styled-components';
import { baseTheme } from 'components/theme';

export const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperModalSetting = styled.div`
  /* display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px; */
`;

export const ModalSetting = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 852px;
  padding: 32px 24px;
  z-index: 100;

  border-radius: 10px;
  background: ${baseTheme.colors.white};
  /* text-align: center; */

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 860px;
  }

  @media screen and (min-width: 1440px) {
    width: 1008px;
    height: 592px;
    padding: 32px 12px;
  }
`;

export const HeaderSettingModal = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;

  @media screen and (min-width: 768px) {
    gap: 452px;
  }

  @media screen and (min-width: 1440px) {
    gap: 756px;
  }
`;

export const HeaderSettingName = styled.h2`
  width: 180px;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
`;

export const ButtonClose = styled.span`
  cursor: pointer;
  fill: ${baseTheme.colors.blue};
  svg {
    width: 24px;
    height: 24px;
  }
`;
