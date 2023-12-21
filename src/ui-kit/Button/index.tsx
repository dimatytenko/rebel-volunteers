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
  WrapperLinkText,
  StyledTextLink,
  StyledNavLinkText,
} from './styles';
export const HomeLink: React.FC<{ onClick?: () => void } & WithChildren> = ({ onClick, children, ...props }) => {
  return (
    <Link to={'/'} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export const NavLink: React.FC<NavLinkProps> = ({ to, active, onClick, children, ...props }) => {
  return (
    <StyledLink to={to} onClick={onClick} {...props} $active={active}>
      <StyledNavLinkText>{children}</StyledNavLinkText>
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

export const LinkText: React.FC<ButtonProps> = ({ to, href, target, icon, children, ...props }) => {
  return (
    <WrapperLinkText {...props}>
      {href && <ALink href={href} target={target} />}
      {to && <LinkRoute to={to} />}
      {icon && icon}
      <StyledTextLink>{children}</StyledTextLink>
    </WrapperLinkText>
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
