import { Container } from "components/Container";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  return (
    <WelcomeStile>
      <Container className="container">
        <WaterTracker>

          <WaterTrackerBenefits>
            <ContainerBenefits>
              <WelcomeTitle>Water consumption tracker</WelcomeTitle>
              <WelcomeInfoTitle>Record daily water intake and track</WelcomeInfoTitle>
              <WelcomeListTitle>Tracker Benefits</WelcomeListTitle>
              <WelcomeListContent>
                <WelcomeListItems>
                  <HabitDriveImg />
                  Habit drive
                </WelcomeListItems>
                <WelcomeListItems>
                  <ViewStatisticsImg />
                  View statistics
                </WelcomeListItems>
                <WelcomeListItems>
                  <PersonalRateSettingImg />
                  Personal rate setting
                </WelcomeListItems>
              </WelcomeListContent>
              <WelcomeButton type="button" onClick={WelcomeButtonClick}>
                Try tracker
              </WelcomeButton>
            </ContainerBenefits>
          </WaterTrackerBenefits>

          <DrinkInfo>
            <ContainerDrinkInfo>
              <DrinkInfoTitle>
                Why drink water
              </DrinkInfoTitle>
              <DrinkInfoList>
                <DrinkInfoItems>Supply of nutrients to all organs</DrinkInfoItems>
                <DrinkInfoItems>Providing oxygen to the lungs</DrinkInfoItems>
                <DrinkInfoItems>Maintaining the work of the heart</DrinkInfoItems>
                <DrinkInfoItems>Release of processed substances</DrinkInfoItems>
                <DrinkInfoItems>Ensuring the stability of the internal environment</DrinkInfoItems>
                <DrinkInfoItems>Maintaining within the normal temperature</DrinkInfoItems>
                <DrinkInfoItems>Maintaining an immune system capable of resisting disease</DrinkInfoItems>
              </DrinkInfoList>
            </ContainerDrinkInfo>
          </DrinkInfo>
          
        </WaterTracker>
      </Container>
    </WelcomeStile>
  );
};