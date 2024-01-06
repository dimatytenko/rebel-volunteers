import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from '../../ui-kit/Button';
import { route } from '../../constants/routes';
import { StyledNavigation } from './styles';

interface NavigationProps {
  path: string;
  onClickItem?: () => void;
}

const nav = [
  {
    to: route.main.path,
    text: 'about',
  },
  {
    to: route.join.path,
    text: 'join',
  },
  {
    to: route.contacts.path,
    text: 'contacts',
  },
  {
    to: route.reports.path,
    text: 'reports',
  },
  {
    to: route.details.path,
    text: 'details',
  },
];

export const Navigation: React.FC<NavigationProps> = ({ path, onClickItem }) => {
  const { t } = useTranslation();

  return (
    <StyledNavigation>
      {nav.map((item) => (
        <NavLink key={item.to} to={item.to} onClick={onClickItem} active={path === item.to}>
          {t(`common:nav.${item.text}`)}
        </NavLink>
      ))}
    </StyledNavigation>
  );
};
