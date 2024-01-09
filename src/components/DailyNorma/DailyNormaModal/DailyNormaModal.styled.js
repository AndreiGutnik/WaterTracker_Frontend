import styled from 'styled-components';
// import sprite from '../utils/sprites.svg';
import { color } from '../utils/colors';
import { baseTheme } from 'components/theme';

export const ModalBox = styled.div`
  width: 256px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 652px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    margin: 0 auto;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const GenderFormulas = styled.div`
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const ItemsGenders = styled.p`
  font-size: 16px;
  line-height: 1.25;
`;

export const Formulas = styled.span`
  color: ${color.primary.blue};

  font-size: 18px;
  line-height: 1.33;
`;

export const VolumeNorm = styled.p`
  padding: 10px;
  margin-bottom: 24px;

  color: #8f8f8f;
  border-radius: 10px;
  border: 1px solid ${color.secondary.gray};

  font-size: 12px;
  line-height: 1.33;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTitle = styled.p`
  // margin-bottom: 16px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const Genders = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 16px;
    line-height: 1.25;
  }

  input:checked {
    fill: blue;
  }
`;

export const Required = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const L = styled.b`
  display: flex;
  align-items: center;
  margin-left: 6px;
  font-size: 18px;
  line-height: 24px;
  display: inline-block;
  color: #407bff;
  flex-shrink: 0;
`;

export const SaveWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    button {
      width: 160px;
      height: 44px;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const RadioWrapper = styled.div`
  input {
    display: none;
    & + span {
      display: inline-block;
      position: relative;
      padding-left: 20px;
      cursor: pointer;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 1px;
        left: 0px;
        border-radius: 50%;
        margin-right: 5px;
        width: 14px;
        height: 14px;
        border: 1px solid ${baseTheme.colors.blue};
        background: #fff;
      }

      &:after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background: ${baseTheme.colors.blue};
        position: absolute;
        border-radius: 50%;
        top: 5px;
        left: 4px;
        opacity: 0;
        transform: scale(0, 0);
        transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
    }

    &:checked + span:after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
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
    transition: fill 0.25s ${baseTheme.animation.cubicBezier};
  }

  &:hover use {
    fill: ${baseTheme.colors.orange};
  }
`;
