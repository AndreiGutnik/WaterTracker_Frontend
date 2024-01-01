import { Calendar } from 'components/Calendar/Month/Month';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { TrackerContainer } from './HomePage.styled';

const HomePage = () => {
  return (
    <TrackerContainer>
      <TodayWaterList />
      <Calendar />
    </TrackerContainer>
  );
};

export default HomePage;
