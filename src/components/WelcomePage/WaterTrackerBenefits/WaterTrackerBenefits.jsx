import { useNavigate } from 'react-router-dom';
import {
  ContainerBenefits,
  WelcomeTitle,
  WelcomeInfoTitle,
  WelcomeListTitle,
  WelcomeListContent,
  WelcomeListItems,
  HabitDriveImg,
  ViewStatisticsImg,
  PersonalRateSettingImg,
  WelcomeButton,
} from './WaterTrackerBenefits.styled';

export const WaterTrackerBenefits = () => {
  const navigate = useNavigate();
  function TryClick() {
    navigate('/signup');
  }
  return (
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
      <WelcomeButton type="button" onClick={TryClick}>
        Try tracker
      </WelcomeButton>
    </ContainerBenefits>
  );
};
