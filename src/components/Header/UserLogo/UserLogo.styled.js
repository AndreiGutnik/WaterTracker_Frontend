import styled from 'styled-components';
import { baseTheme } from '../../../components/theme.js';

export const WrapperBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  & p {
    margin-right: 4px;
    font-size: 18px;
    color: ${baseTheme.colors.black};
  }
  & svg {
    width: 16px;
    height: 16px;
    fill: ${baseTheme.colors.blue};
    transition: fill 0.25s ${baseTheme.animation.cubicBezier};

    &:hover,
    &:focus {
      fill: ${baseTheme.colors.orange};
    }
  }
`;

export const ThumbImg = styled.img`
  width: 28px;
  border-radius: 50%;
`;

export const ModalWrap = styled.div`
  position: relative;
`;
