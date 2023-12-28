import styled from 'styled-components';
import { baseTheme } from '../../components/theme';

export const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 280px;
  height: 36px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: ${baseTheme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: all ${baseTheme.cubicBezier};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: ${baseTheme.colors.violet};
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    line-height: calc(24 / 18);
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
