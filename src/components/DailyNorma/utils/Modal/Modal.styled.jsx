import styled from 'styled-components';

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
  background: '#fff',

  padding: type === 'settings' ? '32px 12px' : '24px 12px',
}));

export const ModalContainer = styled(Container)`
  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;