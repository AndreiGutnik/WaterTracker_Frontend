import { baseTheme } from 'components/theme';
import styled from 'styled-components';

export const TodayStyledDiv = styled.div`
  max-width: 264px;
  max-height: 258px;
  display: flex;
  flex-direction: column;
`;

export const TodayStyle = styled.h2`
  margin-bottom: 16px;
  text-align: left;
  color: ${baseTheme.colors.black};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const ListAddDiv = styled.div`
  width: inherit;
  max-height: 212px;
`;

export const UlStyle = styled.ul`
  height: 180px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #d7e3ff;
    border-radius: 50px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    margin-block: 2px;
    background: #9ebbff;
    border-radius: 50px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #407bff;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${baseTheme.colors.violet_light};
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  & svg {
    width: 26px;
    height: 26px;
    & use {
      fill: ${baseTheme.colors.violet};
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
  border: none;
  background-color: transparent;

  & use {
    fill: ${baseTheme.colors.violet};
  }

  &:hover {
    border-bottom: 1px solid ${baseTheme.colors.violet};
  }
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;

  & use {
    fill: ${baseTheme.colors.red};
  }

  &:hover {
    border-bottom: 1px solid ${baseTheme.colors.red};
  }
`;

export const AddBtnStyle = styled.button`
  color: ${baseTheme.colors.blue};
  line-height: 1.25;
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
    & use {
      fill: ${baseTheme.colors.blue};
    }
  }

  &:hover {
    color: ${baseTheme.colors.orange};
    & use {
      fill: ${baseTheme.colors.orange};
    }
  }
`;
