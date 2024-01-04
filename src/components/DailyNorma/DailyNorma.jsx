import {
  DailyNormaBackground,
  DailyNormaButton,
  MyDailyNormaContainer,
  DailyNormaContainerWaterStat,
  DailyNormaHeader,
  DailyNormaWaterNorma,
  DailyNormaContainer,
  DailySlider,
} from './DailyNorma.styled';
import { ModalContext } from './ModalProvider/ModalProvider';
import { useContext } from 'react';
import DailyNormaModal from 'components/DailyNorma/DailyNormaModal/DailyNormaModal';
import { useAuth } from 'hooks/useAuth';

const DailyNorma = () => {
  const toggleModal = useContext(ModalContext);

  const { user } = useAuth();

  const dailyNormaCalc = (user.waterRate / 1000).toFixed(1);

  const openDailyNormaModal = () => {
    toggleModal(<DailyNormaModal />);
  };

  return (
    <DailyNormaContainer>
      <MyDailyNormaContainer>
        <DailyNormaHeader>My daily norma</DailyNormaHeader>
        <DailyNormaContainerWaterStat>
          <DailyNormaWaterNorma>{`${dailyNormaCalc} L`}</DailyNormaWaterNorma>
          <DailyNormaButton onClick={openDailyNormaModal}>
            Edit
          </DailyNormaButton>
        </DailyNormaContainerWaterStat>
      </MyDailyNormaContainer>
      <DailyNormaBackground></DailyNormaBackground>
    </DailyNormaContainer>
  );
};

export default DailyNorma;
