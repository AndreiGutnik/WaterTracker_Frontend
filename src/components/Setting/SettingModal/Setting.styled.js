import styled from 'styled-components';
import { baseTheme } from 'components/theme';

export const WrapperModalSetting = styled.div`
  /* display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px; */
`;

export const ModalShow = styled.div`
  /* display: block;
    padding: 32px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    border-radius: 10px; */
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
