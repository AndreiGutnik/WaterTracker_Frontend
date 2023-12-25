import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
// import { TrackerOfWater } from './TrackerOfWater/TrackerOfWater';
import { Layout } from './Layout';
import { routes } from 'routes';
// import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';

export const App = () => {
  return (

    <Container>
      WaterTracker
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<p>WelcomePage</p>} />
          <Route path={routes.REGISTER} element={<p>SignUp</p>} />
          <Route path={routes.LOGIN} element={<p>SignIn</p>} />
          <Route path={routes.HOMEPAGE} element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
