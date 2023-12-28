import styled from 'styled-components';
import { Field } from 'formik';

export const ModalContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 280px;
  max-width: 540px;
  padding: 24px 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 10px;
  background: #fff;
  text-align: center;
`;

export const ModalHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;

  & svg {
    width: 24px;
    height: 24px;
  }

  & use {
    fill: #407bff;
  }

  &:hover use {
    fill: #ff9d43;
  }
`;

export const ModalHeader = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23; /* 123.077% */
`;

export const SmaleHeader = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`;

export const TimeInput = styled(Field)`
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
`;
