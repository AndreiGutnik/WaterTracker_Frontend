import styled from 'styled-components';
import { baseTheme } from '../../theme.js';
import { Link } from 'react-router-dom';

export const WrapperSignin = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;

  & p {
    font-size: 18px;
    color: ${baseTheme.colors.blue};
    font-weight: 400;
    line-height: 24px;
    transition: color 0.25s ${baseTheme.animation.cubicBezier};

    &:hover,
    &:focus {
      color: ${baseTheme.colors.orange};
    }

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
