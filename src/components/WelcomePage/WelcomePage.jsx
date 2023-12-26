import { WaterTracker } from './WelcomPage.styled';
import { WelcomeTracker } from './WelcomeTracker/WelcomeTracker';
import { WaterTrackerBenefits } from './WaterTrackerBenefits/WaterTrackerBenefits';
import { DrinkInfo } from './DrinkInfo/DrinkInfo';

const WelcomePage = () => {
  return (
    <WelcomeTracker>
      <WaterTracker>
        <WaterTrackerBenefits />
        <DrinkInfo />
      </WaterTracker>
    </WelcomeTracker>
  );
};

export default WelcomePage;
