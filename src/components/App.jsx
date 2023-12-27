import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { routes } from 'routes';
// import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import WelcomePage from './WelcomePage/WelcomePage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import SignInPage from 'pages/SignInPage/SignInPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route path={routes.WELCOMEPAGE} index element={<WelcomePage />} />
          <Route path={routes.REGISTER} element={<SignUpPage />} />
          <Route path={routes.LOGIN} element={<SignInPage />} />
          <Route path={routes.HOMEPAGE} element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
