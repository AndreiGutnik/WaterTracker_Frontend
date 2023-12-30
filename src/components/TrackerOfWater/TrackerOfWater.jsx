import { Calendar } from 'components/Calendar/Month/Month';
import { TrackerContainer } from './TrackerOfWater.styled';

const { TodayWaterList } = require('components/TodayWaterList/TodayWaterList');

export const TrackerOfWater = () => {
  return (
    <TrackerContainer>
      <TodayWaterList />
      <Calendar />
    </TrackerContainer>
  );
};
