import { baseTheme } from 'components/theme';
import styled from 'styled-components';

export const TrackerContainer = styled.div`
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;
  background: ${baseTheme.colors.grey};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  outline: 1px solid green;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
    height: 680px;
  }
`;
