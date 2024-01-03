import { Calendar } from 'components/Calendar/Month/Month';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import {
  DailyNormaSection,
  HomePageContainer,
  TrackerContainer,
} from './HomePage.styled';
import DailyNorma from 'components/DailyNorma/DailyNorma';
import { Container } from 'components/Container';

const HomePage = () => {
  return (
    <>
      <Container>
        <HomePageContainer>
          <DailyNormaSection>
            <DailyNorma />
          </DailyNormaSection>
          <TrackerContainer>
            <TodayWaterList />
            <Calendar />
          </TrackerContainer>
        </HomePageContainer>
      </Container>
    </>
  );
};

export default HomePage;
