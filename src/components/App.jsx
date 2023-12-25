import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
// import { TrackerOfWater } from './TrackerOfWater/TrackerOfWater';
// import Loader from './Loader/Loader';
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
