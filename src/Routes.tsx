import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';

import { Uikit } from './containers/Uikit';

const Main = lazy(() => import('./containers/Main'));
const About = lazy(() => import('./containers/About'));
const Join = lazy(() => import('./containers/Join'));
const Contacts = lazy(() => import('./containers/Contacts'));
const Reports = lazy(() => import('./containers/Reports'));
const Details = lazy(() => import('./containers/Details'));

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
    <Suspense fallback={<>...Loading</>}>
      <Routes>
        {UikitRoutes}
        {PublicRoutes}
        {/* {PrivateRoutes} */}
      </Routes>
    </Suspense>
  );
};

export default RoutesSwitch;
