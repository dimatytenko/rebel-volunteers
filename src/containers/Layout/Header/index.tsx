import { useLocation } from 'react-router-dom';

import { HeaderComponent } from '../../../components/Layout/Header';
import { IHeaderContainerProps } from '../../../types/layout';
import { useLanguage } from '../../../hooks/language';

export const Header: React.FC<IHeaderContainerProps> = ({ isOpenDrawer, onToggleDrawer, onCloseDrawer }) => {
  const { pathname } = useLocation();
  const { language, onChangeLanguage } = useLanguage();

  return (
    <HeaderComponent
      path={pathname}
      isOpenDrawer={isOpenDrawer}
      onToggleDrawer={onToggleDrawer}
      onCloseDrawer={onCloseDrawer}
      language={language}
      onChangeLanguage={onChangeLanguage}
    />
  );
};
