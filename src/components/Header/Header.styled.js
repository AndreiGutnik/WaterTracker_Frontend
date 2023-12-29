import styled from 'styled-components';
import { baseTheme } from '../../components/theme.js'
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const WrapperLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 108px;
  height: 48px;
  text-decoration: none;

  & p {
    font-family: 'RobotoBold';
    font-size: 12px;
    text-transform: uppercase;
    text-align: left;
    line-height: normal;
    color: ${baseTheme.colors.blue};
    font-weight: 700;
  }
`;

export const WrapperSignin = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  & p {
    font-family: 'RobotoRegular';
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

export const LogoTag = styled.img`
  width: 40px;
  height: 48px;
`;
