import { Calendar } from 'components/Calendar/Month/Month';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { TrackerContainer } from './HomePage.styled';
import HeaderSetting from 'components/Setting/HeaderSetting';
import SettingModal from 'components/Setting/SettingModal';

const HomePage = () => {
  return (
    <TrackerContainer>
      <SettingModal/>
      <TodayWaterList />
      <Calendar />
    </TrackerContainer>
  );
};

export default HomePage;
