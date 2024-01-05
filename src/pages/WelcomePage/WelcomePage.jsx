import { WelcomeContainer } from './WelcomPage.styled';
// import { WelcomeTracker } from '../../components/WelcomePage/WelcomeTracker/WelcomeTracker';
import { WaterTrackerBenefits } from '../../components/WelcomePage/WaterTrackerBenefits/WaterTrackerBenefits';
import { DrinkInfo } from '../../components/WelcomePage/DrinkInfo/DrinkInfo';

const WelcomePage = () => {
  return (
    // <WelcomeTracker>
    <WelcomeContainer>
      {/* <WaterTracker> */}
      <WaterTrackerBenefits />
      <DrinkInfo />
      {/* </WaterTracker> */}
    </WelcomeContainer>
    // </WelcomeTracker>
  );
};

export default WelcomePage;
