import styled from 'styled-components';
import { baseTheme } from 'components/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 1440px) {
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;

const Container = styled.div(({ type }) => ({
  borderRadius: '10px',
  background: baseTheme.colors.white,

  padding: type === 'settings' ? '32px 12px' : '24px 12px',
}));

export const ModalContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;
