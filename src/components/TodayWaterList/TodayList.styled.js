import styled from 'styled-components';

export const TodayStyle = styled.h2`
  margin-bottom: 16px;
  text-align: left;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23; /* 123.077% */
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #d7e3ff;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  & svg {
    width: 26px;
    height: 26px;
    & use {
      fill: #9ebbff;
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const TextVolume = styled.p`
  color: var(--Primery-Color-Blue, #407bff);
  font-size: 18px;
  line-height: 1.33; /* 133.333% */
`;

export const TextTime = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 12px;
  line-height: 2; /* 200% */
`;

export const EditBtn = styled.button`
  border: none;
  background-color: transparent;

  & use {
    fill: #9ebbff;
  }

  &:hover {
    border-bottom: 1px solid #9ebbff;
  }
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;

  & use {
    fill: #ef5050;
  }

  &:hover {
    border-bottom: 1px solid #ef5050;
  }
`;

export const AddBtnStyle = styled.button`
  color: var(--Primery-Color-Blue, #407bff);
  line-height: 1.25; /* 125% */
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
    & use {
      fill: #407bff;
    }
  }

  &:hover {
    color: var(--Secondary-color-5, #ff9d43);
    & use {
      fill: #ff9d43;
    }
  }
`;
