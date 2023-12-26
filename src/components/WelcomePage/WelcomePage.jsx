import { Container } from 'components/Container';
import { WaterTracker } from './WelcomPage.styled';
import { WelcomeTracker } from './WelcomeTracker/WelcomeTracker';
import { WaterTrackerBenefits } from './WaterTrackerBenefits/WaterTrackerBenefits';
import { DrinkInfo } from './DrinkInfo/DrinkInfo';

const WelcomePage = () => {
  return (
    <WelcomeTracker>

      <Container className="container">
        <WaterTracker>
          <WaterTrackerBenefits />
          <DrinkInfo />
        </WaterTracker>
      </Container>
        
    </WelcomeTracker>
  );
};

export default WelcomePage;
