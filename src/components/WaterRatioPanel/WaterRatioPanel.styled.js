import { baseTheme } from 'components/theme';
import styled from 'styled-components';

const { duration } = baseTheme.animation;
const { cubicBezier } = baseTheme.animation;

export const RatioPanelContainer = styled.div`
  max-width: 280px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 592px;
    height: 90px;
  }
`;

export const TodayP = styled.h3`
  margin-bottom: 8px;
  align-self: baseline;
  color: ${baseTheme.colors.blue};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const RatioContainer = styled.div`
  margin-bottom: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 356px;
    height: 90px;
    margin-right: 12px;
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1440px) {
    width: 391px;
    margin-right: 23px;
  }
`;

export const RatioInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 256px;
  border-radius: 30px;
  margin-bottom: 6px;
  outline: none;

  background: ${baseTheme.colors.violet_light};
  background-image: linear-gradient(
    ${baseTheme.colors.violet},
    ${baseTheme.colors.violet}
  );

  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 14px;
    width: 14px;
    margin-top: -3px;

    border-radius: 50%;
    background-color: ${baseTheme.colors.white};
    border: 1px solid ${baseTheme.colors.blue};
  }

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 30px;
    background: ${baseTheme.colors.violet};
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-webkit-slider-thumb:hover {
    background: ${baseTheme.colors.white};
  }

  @media screen and (min-width: 768px) {
    width: 325px;
  }
  @media only screen and (min-width: 1440px) {
    width: 360px;
  }
`;

export const RatioMarks = styled.div`
  width: 256px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 8px;
    color: #d7e3ff;
  }

  @media screen and (min-width: 768px) {
    width: 325px;
    margin-bottom: 8px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 4px;
  }
`;

export const RatioPercents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & span {
    color: var(--Primery-Color-Blue, #407bff);
    text-align: center;
    font-size: 12px;
    line-height: 1.33;
    width: 30px;
  }

  & span:nth-child(2) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const AddWaterBtn = styled.button`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 10px;
  background: ${baseTheme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: box-shadow ${duration} ${cubicBezier};

  & span {
    font-size: 16px;
    color: ${baseTheme.colors.white};
    line-height: 1.25;
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0;
  }

  & svg {
    width: 24px;
    height: 24px;
    & use {
      fill: ${baseTheme.colors.white};
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    & span {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1440px) {
    width: 178px;
  }
`;
