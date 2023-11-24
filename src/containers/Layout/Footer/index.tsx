import { useLocation } from 'react-router-dom';

import { FooterComponent } from '../../../components/Layout/Footer';

export const Footer = () => {
  const { pathname } = useLocation();

  return <FooterComponent path={pathname} />;
};
