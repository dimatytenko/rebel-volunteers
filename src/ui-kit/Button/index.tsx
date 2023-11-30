import React from 'react';
import { Link } from 'react-router-dom';

import { WithChildren } from '../../types/helpers';
import { NavLinkProps, ArrowButtonProps, ButtonProps } from './types';
import { Text1 } from '../Typography';
import {
  StyledLink,
  ButtonBase,
  ALink,
  LinkRoute,
  ArrowButtonBase,
  ArrowButtonIcon,
  StyledButton,
  ArrowShortButtonIcon,
} from './styles';
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

export const LinkButton: React.FC<ButtonProps> = ({ to, href, target, icon, children, ...props }) => {
  return (
    <ButtonBase {...props}>
      {href && <ALink href={href} target={target} />}
      {to && <LinkRoute to={to} />}
      {icon && icon}
      <Text1>{children}</Text1>
    </ButtonBase>
  );
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, ...props }) => {
  return (
    <ArrowButtonBase onClick={onClick} {...props}>
      <ArrowButtonIcon direction={direction} />
    </ArrowButtonBase>
  );
};

export const Button: React.FC<ButtonProps> = ({ icon, onClick, href, to, target, children, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {href && <ALink href={href} target={target} />}
      {to && <LinkRoute to={to} />}
      {children}
      {icon && <ArrowShortButtonIcon />}
    </StyledButton>
  );
};
