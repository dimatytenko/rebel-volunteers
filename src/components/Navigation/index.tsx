import React from 'react';

import { NavLink } from '../../ui-kit/Button';
import { route } from '../../constants/routes';
import { StyledNavigation } from './styles';

const nav = [
  {
    to: route.main.path,
    text: 'Про нас',
  },
  {
    to: route.join.path,
    text: 'Долучитись',
  },
  {
    to: route.contacts.path,
    text: 'Контакти',
  },
  {
    to: route.reports.path,
    text: 'Звіти',
  },
  {
    to: route.details.path,
    text: 'Реквізити',
  },
];

interface NavigationProps {
  path: string;
  onClickItem?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ path, onClickItem }) => {
  return (
    <StyledNavigation>
      {nav.map((item) => (
        <NavLink key={item.to} to={item.to} onClick={onClickItem} active={path === item.to}>
          {item.text}
        </NavLink>
      ))}
    </StyledNavigation>
  );
};
