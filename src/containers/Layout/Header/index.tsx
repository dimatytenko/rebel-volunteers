import { useLocation } from 'react-router-dom';

import { HeaderComponent } from '../../../components/Layout/Header';

export const Header = () => {
  const { pathname } = useLocation();

  return <HeaderComponent path={pathname} />;
};
