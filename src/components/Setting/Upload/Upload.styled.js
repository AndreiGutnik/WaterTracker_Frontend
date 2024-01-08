import { baseTheme } from 'components/theme';
import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Upload = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${baseTheme.colors.blue};
  cursor: pointer;

  & p {
    transition: color 0.25s ${baseTheme.animation.cubicBezier};
  }

  &:hover,
  &:focus {
    & svg {
      fill: ${baseTheme.colors.orange};
    }
    & p {
      color: ${baseTheme.colors.orange};
    }
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: ${baseTheme.colors.blue};
    transition: fill 0.25s ${baseTheme.animation.cubicBezier};
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${baseTheme.colors.grey};
  background-size: cover;
  background-repeat: no-repeat;
`;
