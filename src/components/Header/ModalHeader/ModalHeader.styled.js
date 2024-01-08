import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, 0);
  z-index: 100;
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  border-radius: 10px;
  background: var(--Primery-Color-White, #fff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;
