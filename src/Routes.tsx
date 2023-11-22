import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';
import { Main } from './containers/Main';
import { Uikit } from './containers/Uikit';

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
];

// only for development
const UikitRoutes = [
  <Route key="uikit" path={route.uikit.path} element={<Uikit />} />,
];

const RoutesSwitch = () => {
  return (
    <Routes>
      {UikitRoutes}
      {PublicRoutes}
      {/* {PrivateRoutes} */}
    </Routes>
  );
};

export default RoutesSwitch;
