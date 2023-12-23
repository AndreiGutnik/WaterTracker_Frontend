import { TrackerContainer } from './TrackerOfWater.styled';

const { TodayWaterList } = require('components/TodayWaterList/TodayWaterList');

export const TrackerOfWater = () => {
  return (
    <TrackerContainer>
      <TodayWaterList />
      <div>
        <h2>Month</h2>
      </div>
    </TrackerContainer>
  );
};
