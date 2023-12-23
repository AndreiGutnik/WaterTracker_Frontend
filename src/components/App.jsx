import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import SettingModal from './Setting/SettingModal';
import vector from './Setting/symbol-defs.svg';


// import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      WaterTracker
      <GlobalStyle />
      <SettingModal />
      <div>
        <svg width="24" height="24">
          <use href={vector}></use>
        </svg>
      </div>
    </Container>
  );
};

export default App

