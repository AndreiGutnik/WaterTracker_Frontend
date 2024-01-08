import styled from 'styled-components';
import { baseTheme } from 'components/theme';
const { duration } = baseTheme.animation;
const { cubicBezier } = baseTheme.animation;

export const ModalContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 280px;
  height: 540px;
  padding: 24px 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;
  background: ${baseTheme.colors.white};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 504px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const ModalHead = styled.div`
  margin-bottom: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

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

export const ModalHeader = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const SmallHeader = styled.h4`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const ModalEdit = styled.div`
  width: 280px;
  height: 648px;
  padding: 24px 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 10px;
  background: ${baseTheme.colors.white};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 580px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const InfoEditWrap = styled.div`
  width: 256px;
  height: 52px;
  padding: 8px 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: ${baseTheme.colors.grey};

  & svg {
    width: 36px;
    height: 36px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media only screen and (min-width: 1440px) {
    }
    & use {
      x: 5px;
      y: 3px;
      fill: ${baseTheme.colors.blue};
    }
  }
`;

export const TextEditVolume = styled.p`
  color: ${baseTheme.colors.blue};
  font-size: 18px;
  line-height: 1.33;
  height: 60%;
`;

export const TextEditTime = styled.p`
  color: ${baseTheme.colors.black};
  font-size: 12px;
  line-height: 2;
`;

export const ModalDelete = styled.div`
  width: 280px;
  height: 280px;
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

export const SmallDeleteHeader = styled.h4`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
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
  }
`;
