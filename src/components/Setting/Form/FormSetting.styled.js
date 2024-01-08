import { baseTheme } from 'components/theme';
import styled from 'styled-components';

export const Form = styled.form``;

export const FormContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: inline-block;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const BlockTitle = styled.h3`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${baseTheme.colors.black};
`;

export const LabelName = styled.label`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${baseTheme.colors.black};

  @media screen and (min-width: 1440px) {
    &:first-child {
      margin-top: 53px;
    }
  }
`;

export const GenderWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    /* margin-bottom: 53px; */
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

export const FieldWrapper = styled.div``;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const EyeButton = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    fill: ${baseTheme.colors.blue};
  }
`;

export const Input = styled.input`
  width: 256px;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${baseTheme.colors.violet_light};
  color: ${baseTheme.colors.blue};
  line-height: 20px;
  margin-top: 8px;

  &:focus {
    outline: 1px solid ${baseTheme.colors.violet_light};
  }

  &::placeholder {
    color: ${baseTheme.colors.violet_light};
  }

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const FormText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 12px;
`;

export const Button = styled.button`
  margin-top: 24px;
  width: 256px;
  height: 36px;
  padding: 8px 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  color: ${baseTheme.colors.white};
  background: ${baseTheme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  transition: box-shadow 0.25s ${baseTheme.animation.cubicBezier};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:focus {
    outline: 1px solid ${baseTheme.colors.blue};
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    padding: 10px 30px;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    float: right;
  }
`;
