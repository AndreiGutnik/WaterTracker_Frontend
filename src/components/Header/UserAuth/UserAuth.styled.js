import styled from 'styled-components';
import { baseTheme } from '../../theme.js';
import { Link } from 'react-router-dom';

export const WrapperSignin = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  & p {
    font-size: 18px;
    color: ${baseTheme.colors.blue};
    font-weight: 400;
    line-height: 24px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  :hover {
    color: ${baseTheme.colors.orange};
  }
`;
