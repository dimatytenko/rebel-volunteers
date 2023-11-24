import React from 'react';
import { Link } from 'react-router-dom';

import { WithChildren } from '../../types/helpers';
import { NavLinkProps, LinkButtonProps } from './types';
import { Text1 } from '../Typography';
import { StyledLink, ButtonBase, ALink, LinkRoute } from './styles';
export const HomeLink: React.FC<WithChildren> = ({ children, ...props }) => {
  return (
    <Link to={'/'} {...props}>
      {children}
    </Link>
  );
};

export const NavLink: React.FC<NavLinkProps> = ({ to, active, children, ...props }) => {
  return (
    <StyledLink to={to} {...props} $active={active}>
      <Text1>{children}</Text1>
    </StyledLink>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({ to, href, target, icon, children, ...props }) => {
  return (
    <ButtonBase {...props}>
      {href && <ALink href={href} target={target} />}
      {to && <LinkRoute to={to} />}
      {icon && icon}
      <Text1>{children}</Text1>
    </ButtonBase>
  );
};
