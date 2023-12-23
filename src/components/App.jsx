import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import SettingModal from './Setting/SettingModal';


// import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      WaterTracker
      <GlobalStyle />
      <SettingModal/>
    </Container>
  );
};

export default App

