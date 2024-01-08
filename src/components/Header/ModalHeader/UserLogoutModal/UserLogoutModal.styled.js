import styled from 'styled-components';
import { baseTheme } from 'components/theme';
const { duration } = baseTheme.animation;
const { cubicBezier } = baseTheme.animation;

export const ModalHead = styled.div`
  margin-bottom: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;

  & svg {
    width: 24px;
    height: 24px;
  }

  & use {
    fill: ${baseTheme.colors.blue};
    transition: fill ${duration} ${cubicBezier};
  }

  &:hover use {
    fill: ${baseTheme.colors.orange};
  }
`;

export const SmaleDeleteHeader = styled.h4`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
`;
export const ModalHeader = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const ModalDelete = styled.div`
  width: 280px;
  height: 260px;
  padding: 32px 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;
  background: ${baseTheme.colors.white};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const DivDeleteBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;

  & button {
    display: flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: ${baseTheme.colors.blue};

    line-height: 1.25;

    border: none;
    border-radius: 10px;
    background: ${baseTheme.colors.violet_light};

    transition: box-shadow ${duration} ${cubicBezier};

    &:first-child {
      color: ${baseTheme.colors.white};
      background: ${baseTheme.colors.red};
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    }

    &:first-child:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
      cursor: pointer;
    }

    &:last-child:hover {
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    }

    &:active {
      box-shadow: 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    height: 44px;
    gap: 24px;
    flex-direction: row-reverse;

    & button {
      width: 160px;
    }
    @media only screen and (min-width: 1440px) {
        flex-direction: row-reverse;
        justify-content: flex-end;
  }

  }
`;
