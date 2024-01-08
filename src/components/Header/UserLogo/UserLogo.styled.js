import styled from 'styled-components';
import { baseTheme } from '../../../components/theme.js';

export const WrapperBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0;
  background-color: transparent;

  & p {
    margin-right: 4px;
    font-size: 18px;
    color: ${baseTheme.colors.black};
  }
`;

export const ThumbImg = styled.img`
  width: 28px;
  border-radius: 50%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  border: none;
  background-color: ${baseTheme.colors.white};
  cursor: pointer;

  & svg {
    fill: ${baseTheme.colors.blue};
  }

  & p {
    width: 62px;
    color: ${baseTheme.colors.blue};
    font-size: 16px;
    line-height: calc(20 / 16);
  }
`;
