import styled from 'styled-components';
import { baseTheme } from '../../../components/theme';

export const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, 0);
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  z-index: 100;

  border-radius: 10px;
  background-color: ${baseTheme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  border: none;
  background-color: ${baseTheme.colors.white};
  cursor: pointer;

  & svg {
    fill: ${baseTheme.colors.blue};
  }

  & p {
    width: 62px;
    color: ${baseTheme.colors.blue};
    font-size: 16px;
    line-height: calc(20 / 16);
  }
`;
