import styled from 'styled-components';
import { baseTheme } from '../../../components/theme';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, 0);
  z-index: 100;
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  border-radius: 10px;
  background: var(--Primery-Color-White, #fff);
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
