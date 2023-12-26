import styled from 'styled-components';
import { ReactComponent as CalendarIconSvg } from '../../../images/welcome/icons/calendar.svg';
import { ReactComponent as SettingsIconSvg } from '../../../images/welcome/icons/settings.svg';
import { ReactComponent as StatisticsIconSvg } from '../../../images/welcome/icons/statistics.svg';
import { baseTheme } from '../../theme';

export const ContainerBenefits = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 1440px) {
    margin-right: 81px;
    margin-bottom: 0;
    font-size: 26px;
  }
  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
`;

export const WelcomeTitle = styled.h1`
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: calc(42 / 36);
  font-size: 36px;
  font-weight: 700;
  color: ${baseTheme.colors.black};
  @media only screen and (max-width: 767px) {
    line-height: calc(32 / 28);
    font-size: 28px;
  }
`;

export const WelcomeInfoTitle = styled.p`
  margin-bottom: 24px;
  line-height: calc(30 / 24);
  font-size: 24px;
  color: ${baseTheme.colors.black};
  @media only screen and (min-width: 768px) {
    line-height: calc(32 / 26);
    font-size: 26px;
  }
`;

export const WelcomeListTitle = styled.h2`
  margin-bottom: 12px;
  line-height: calc(20 / 18);
  font-weight: 700;
  font-size: 18px;
`;

export const WelcomeListContent = styled.ul`
  margin-bottom: 24px;
  line-height: calc(20 / 16);
  font-size: 16px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    disply: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const WelcomeListItems = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const HabitDriveImg = styled(CalendarIconSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const ViewStatisticsImg = styled(StatisticsIconSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const PersonalRateSettingImg = styled(SettingsIconSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const WelcomeButton = styled.button`
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
