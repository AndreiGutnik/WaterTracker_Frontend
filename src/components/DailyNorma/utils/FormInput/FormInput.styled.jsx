import styled from 'styled-components';
import { color } from '../colors';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 18px;
  line-height: 1.33;
`;

export const LableAddEdit = styled(Label)`
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 10px;

  color: ${color.primary.blue};
  border-radius: 6px;
  border: 1px solid ${color.secondary.gray};
  background-color: ${color.primary.white};
  outline: none;

  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    color: ${color.secondary.azure};
  }
`;

export const AuthInput = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const SettingsInput = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${color.secondary.tomato};
  font-size: 14px;
  line-height: 1.28;
`;
