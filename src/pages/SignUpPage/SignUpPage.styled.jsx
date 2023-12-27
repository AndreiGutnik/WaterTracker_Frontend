import styled from 'styled-components';
import { baseTheme } from '../../components/theme';

export const SignUpPageTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: calc(32 / 26);
  font-size: 26px;
  font-weight: 500;
  color: ${baseTheme.colors.black};
`;

export const SignUpForm = styled.ul`
  margin-top: 16px;
  line-height: calc(20 / 16);
  font-size: 16px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    disply: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SignUpItems = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
export const SignUpButton = styled.button`
  margin-top: 16px;
  margin-bottom: 16px;
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
  color: ${baseTheme.colors.white}
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
