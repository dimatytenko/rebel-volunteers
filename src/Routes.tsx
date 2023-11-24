import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';
import { Main } from './containers/Main';
import { About } from './containers/About';
import { Join } from './containers/Join';
import { Contacts } from './containers/Contacts';
import { Reports } from './containers/Reports';
import { Details } from './containers/Details';

import { Uikit } from './containers/Uikit';

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="about" path={route.about.path} element={<About />} />,
  <Route key="join" path={route.join.path} element={<Join />} />,
  <Route key="contacts" path={route.contacts.path} element={<Contacts />} />,
  <Route key="reports" path={route.reports.path} element={<Reports />} />,
  <Route key="details" path={route.details.path} element={<Details />} />,
];

// only for development
const UikitRoutes = [<Route key="uikit" path={route.uikit.path} element={<Uikit />} />];

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
