import {
  DailyNormaButton,
  DailyNormaContainer,
  DailyNormaContainerWaterStat,
  DailyNormaHeader,
  DailyNormaWaterNorma,
} from './DailyNorma.styled';
import { ModalContext } from './ModalProvider/ModalProvider';
import { useContext } from 'react';
import DailyNormaModal from 'components/DailyNorma/DailyNormaModal/DailyNormaModal';
import { useAuth } from './utils/useAuth';

const DailyNorma = () => {
  const toggleModal = useContext(ModalContext);

  const { dailyNorma } = useAuth();

  const dailyNormaCalc = (dailyNorma / 1000).toFixed(1);

  const openDailyNormaModal = () => {
    toggleModal(<DailyNormaModal />);
  };

  return (
    <DailyNormaContainer>
      <DailyNormaHeader>My daily norma</DailyNormaHeader>
      <DailyNormaContainerWaterStat>
        <DailyNormaWaterNorma>{`${dailyNormaCalc} L`}</DailyNormaWaterNorma>
        <DailyNormaButton onClick={openDailyNormaModal}>Edit</DailyNormaButton>
      </DailyNormaContainerWaterStat>
    </DailyNormaContainer>
  );
};

export default DailyNorma;
