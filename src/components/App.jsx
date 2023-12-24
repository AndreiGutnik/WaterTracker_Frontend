import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
// import { TrackerOfWater } from './TrackerOfWater/TrackerOfWater';
// import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      WaterTracker
      {/* <TrackerOfWater /> */}
      <GlobalStyle />
    </Container>
  );
};
