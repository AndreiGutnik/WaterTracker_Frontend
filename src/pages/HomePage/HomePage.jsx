import { Calendar } from 'components/Calendar/Month/Month';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { TrackerContainer } from './HomePage.styled';
import DailyNorma from 'components/DailyNorma/DailyNorma';

const HomePage = () => {
  return (
    <>
      <DailyNorma />
      <TrackerContainer>
        <TodayWaterList />
        <Calendar />
      </TrackerContainer>
    </>
  );
};

export default HomePage;
