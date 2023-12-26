import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { routes } from 'routes';
// import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import WelcomePage from './WelcomePage/WelcomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route path={routes.WELCOMEPAGE} index element={<WelcomePage />} />
          <Route path={routes.REGISTER} element={<p>SignUp</p>} />
          <Route path={routes.LOGIN} element={<p>SignIn</p>} />
          <Route path={routes.HOMEPAGE} element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
