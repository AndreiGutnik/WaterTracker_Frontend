import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import { Route, Routes } from 'react-router-dom';
// import DailyNorma from './DailyNorma/DailyNorma';

export const App = () => {
  return (
    <Container>
      {/* <DailyNorma></DailyNorma> */}
      WaterTracker
      <GlobalStyle />
    </Container>
  );
};
