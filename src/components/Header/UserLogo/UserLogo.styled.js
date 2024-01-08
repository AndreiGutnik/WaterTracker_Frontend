import styled from 'styled-components';
import { baseTheme } from '../../../components/theme.js';

export const WrapperBtn = styled.button`
position: relative;
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


