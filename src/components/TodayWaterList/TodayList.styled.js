import { baseTheme } from 'components/theme';
import styled from 'styled-components';
const { duration } = baseTheme.animation;
const { cubicBezier } = baseTheme.animation;

export const TodayStyledDiv = styled.div`
  max-width: 264px;
  max-height: 258px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;

export const TodayStyle = styled.h2`
  margin-bottom: 16px;
  text-align: left;
  color: ${baseTheme.colors.black};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-weight: 500;
  }
`;

export const ListAddDiv = styled.div`
  width: inherit;
  max-height: 212px;
  @media screen and (min-width: 768px) {
    height: 260px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const UlStyle = styled.ul`
  height: 212px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 5px;
    background: ${baseTheme.colors.violet_light};
    border-radius: 50px;
    border: 1px solid ${baseTheme.colors.grey};
  }

  &::-webkit-scrollbar-thumb {
    background: ${baseTheme.colors.violet};
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${baseTheme.colors.blue};
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 38px;

  padding: 0 0 12px 0;
  margin: 12px 4px 0 4px;
  border-bottom: 1px solid ${baseTheme.colors.violet_light};
`;

export const InfoWrap = styled.div`
  width: 166px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 26px;
    height: 26px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media only screen and (min-width: 1440px) {
    }
    & use {
      x: 5px;
      y: 2px;
      fill: ${baseTheme.colors.blue};
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const TextVolume = styled.p`
  color: ${baseTheme.colors.blue};
  font-size: 18px;
  line-height: 1.33;
`;

export const TextTime = styled.p`
  color: ${baseTheme.colors.black};
  font-size: 12px;
  line-height: 2;
`;

export const EditBtn = styled.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color ${duration} ${cubicBezier};
  & use {
    fill: ${baseTheme.colors.violet};
  }

  &:hover {
    border-bottom: 1px solid ${baseTheme.colors.violet};
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color ${duration} ${cubicBezier};

  & use {
    fill: ${baseTheme.colors.red};
  }

  &:hover {
    border-bottom: 1px solid ${baseTheme.colors.red};
    cursor: pointer;
  }
`;

export const AddBtnStyle = styled.button`
  display: flex;
  gap: 8px;
  padding: 12px 0 0 0;
  color: ${baseTheme.colors.blue};
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: color ${duration} ${cubicBezier};

  & svg {
    width: 16px;
    height: 16px;
    & use {
      fill: ${baseTheme.colors.blue};
      transition: fill ${duration} ${cubicBezier};
    }
  }

  &:hover {
    cursor: pointer;
    color: ${baseTheme.colors.orange};
    & use {
      fill: ${baseTheme.colors.orange};
    }
  }
`;
