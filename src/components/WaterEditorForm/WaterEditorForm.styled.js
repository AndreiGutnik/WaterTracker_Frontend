import styled from 'styled-components';

export const AmountContainer = styled.aside`
  display: flex;
`;

export const PlusMinusBtn = styled.button`
  border: none;
  background-color: transparent;

  & svg {
    width: 24px;
    height: 24px;
    border-radius: 30px;
    border: 1px solid #9ebbff;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }

  & use {
    fill: #407bff;
  }

  &:hover use {
    fill: #ff9d43;
  }
`;

export const AmountSpan = styled.span`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`;

export const AmountDiv = styled.span`
  width: 72px;
  border-radius: 40px;
  background: #d7e3ff;
`;

export const SaveBtn = styled.button`
  width: 100%;
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  & span {
    color: #fff;
    line-height: 1.25; /* 125% */
  }
`;
