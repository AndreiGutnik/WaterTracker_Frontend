import { Calendar } from 'components/Calendar/Month/Month';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { TrackerContainer } from './HomePage.styled';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';

const HomePage = () => {
  return (
    <>
      <WaterRatioPanel />
      <TrackerContainer>
        <TodayWaterList />
        <Calendar />
      </TrackerContainer>
    </>
  );
};

export default HomePage;
