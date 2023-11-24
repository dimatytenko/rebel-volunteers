import React from 'react';

import { NavLink } from '../../ui-kit/Button';
import { route } from '../../constants/routes';
import { StyledNavigation } from './styles';

const nav = [
  {
    to: route.about.path,
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
}

export const Navigation: React.FC<NavigationProps> = ({ path }) => {
  return (
    <StyledNavigation>
      {nav.map((item) => (
        <NavLink key={item.to} to={item.to} active={path.includes(item.to)}>
          {item.text}
        </NavLink>
      ))}
    </StyledNavigation>
  );
};
