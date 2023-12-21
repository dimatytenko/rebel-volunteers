import { useLocation } from 'react-router-dom';

import { HeaderComponent } from '../../../components/Layout/Header';
import { IHeaderContainerProps } from '../../../types/layout';

export const Header: React.FC<IHeaderContainerProps> = ({ isOpenDrawer, onToggleDrawer, onCloseDrawer }) => {
  const { pathname } = useLocation();

  return (
    <HeaderComponent
      path={pathname}
      isOpenDrawer={isOpenDrawer}
      onToggleDrawer={onToggleDrawer}
      onCloseDrawer={onCloseDrawer}
    />
  );
};
