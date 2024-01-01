import { WaterTracker, WelcomeContainer } from './WelcomPage.styled';
import { WelcomeTracker } from './WelcomeTracker/WelcomeTracker';
import { WaterTrackerBenefits } from './WaterTrackerBenefits/WaterTrackerBenefits';
import { DrinkInfo } from './DrinkInfo/DrinkInfo';

const WelcomePage = () => {
  return (
    <WelcomeTracker>
      <WelcomeContainer>
      <WaterTracker>
        <WaterTrackerBenefits />
        <DrinkInfo />
        </WaterTracker>
        </WelcomeContainer>
    </WelcomeTracker>
  );
};

export default WelcomePage;
