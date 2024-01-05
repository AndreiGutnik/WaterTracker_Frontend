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
import { dailyNormaSelector } from 'redux/auth/auth.selectors';
import { selectTodayWater } from 'redux/water/selectors';

export const WaterRatioPanel = () => {
  const dispatch = useDispatch();

  const todayNorma = useSelector(dailyNormaSelector);
  const todayData = useSelector(selectTodayWater);

  const todayValue = todayData.waterNotes?.reduce(
    (prev, { amountWater }) => prev + amountWater,
    0
  );

  const percentages = (todayValue / todayNorma) * 100;

  return (
    <RatioPanelContainer>
      <RatioContainer>
        <TodayP>Today</TodayP>
        <RatioInput
          style={{ backgroundSize: `${percentages}% 100%` }}
          onChange={() => {}}
          type="range"
          value={`${percentages}`}
          min="0"
          max="100"
          step="1"
        />
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
