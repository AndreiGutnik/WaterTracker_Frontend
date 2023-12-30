import styled from 'styled-components';

import { baseTheme } from '../../theme';

export const ContainerDrinkInfo = styled.div`
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background-color: ${baseTheme.colors.grey};
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 34px;
  }
`;

export const DrinkInfoTitle = styled.h2`
  margin-bottom: 12px;
  line-height: calc(20 / 18);
  font-weight: 700;
  font-size: 18px;
`;

export const DrinkInfoList = styled.ul``;

export const DrinkInfoItems = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: calc(20 / 16);
  font-size: 16px;
  &::before {
    content: '';
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
    border-color: ${baseTheme.colors.blue};
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;