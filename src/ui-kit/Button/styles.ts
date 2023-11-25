import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const StyledLink = styled(RouteLink)<{ $active?: boolean }>`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${({ $active }) => ($active ? '100%' : '0%')};
    height: 1.5px;
    background-color: ${({ theme }) => theme.palette.colors.secondary};
    transition: all ${({ theme }) => theme.transition.primary};
  }

  &:hover:before {
    width: 100%;
  }
`;

export const ButtonBase = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.palette.colors.red};
  transition: all ${({ theme }) => theme.transition.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.redHover};
  }
`;

export const ALink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-underline: none;
`;

export const LinkRoute = styled(RouteLink)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-underline: none;
`;
