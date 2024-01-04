import { openAddWater } from 'redux/modals/modalsSlice';
import sprite from '../../images/sprite.svg';
import {
  AddWaterBtn,
  RatioContainer,
  RatioInput,
  RatioMarks,
  RatioPanelContainer,
  RatioPercents,
  TodayP,
} from './WaterRatioPanel.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWaterMonth } from 'redux/month/selectors';

export const WaterRatioPanel = () => {
  const dispatch = useDispatch();

  const date = new Date();
  const curDay = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });

  const formattedDate = `${curDay}, ${month}`;

  const monthArr = useSelector(selectorWaterMonth);

  const day = monthArr.find(d => d.dayOfMonth === formattedDate);

  return (
    <RatioPanelContainer>
      <RatioContainer>
        <TodayP>Today</TodayP>
        {day && (
          <RatioInput
            style={{ backgroundSize: `${day.percent}% 100%` }}
            onChange={() => {}}
            type="range"
            value={`${day.percent}`}
            min="0"
            max="100"
            step="1"
          />
        )}
        <RatioMarks>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </RatioMarks>
        <RatioPercents>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </RatioPercents>
      </RatioContainer>
      <AddWaterBtn onClick={() => dispatch(openAddWater())}>
        <svg>
          <use href={sprite + '#plus-circle'}></use>
        </svg>
        <span>Add water</span>
      </AddWaterBtn>
    </RatioPanelContainer>
  );
};
