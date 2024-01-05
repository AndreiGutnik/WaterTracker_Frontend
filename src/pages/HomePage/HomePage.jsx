import { Calendar } from 'components/Calendar/Month/Month';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import {
  BubblesContainer,
  DailyNormaSection,
  HomePageContainer,
  TrackerContainer,
} from './HomePage.styled';
import DailyNorma from 'components/DailyNorma/DailyNorma';
import { Container } from 'components/Container';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/water/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <BubblesContainer>
        <Container>
          <HomePageContainer>
            <DailyNormaSection>
              <DailyNorma />
              <WaterRatioPanel />
            </DailyNormaSection>
            <TrackerContainer>
              <TodayWaterList />
              <Calendar />
            </TrackerContainer>
          </HomePageContainer>
          {isLoading && <Loader />}
        </Container>
      </BubblesContainer>
    </>
  );
};

export default HomePage;
