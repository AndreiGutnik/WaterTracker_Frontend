import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { routes } from 'routes';
// import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<p>WelcomePage</p>} />
          <Route path={routes.REGISTER} element={<p>SignUp</p>} />
          <Route path={routes.LOGIN} element={<p>SignIn</p>} />
          <Route path={routes.MAINPAGE} element={<p>MainPage</p>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
