import { HTMLAttributeAnchorTarget } from 'react';

import { WithChildren } from '../../types/helpers';

export interface NavLinkProps extends WithChildren {
  to: string;
  active: boolean;
  onClick?: () => void;
}

export type DirectionArrowType = 'left' | 'right';
export interface ArrowButtonProps {
  className?: string;
  direction: DirectionArrowType;
  onClick?: () => void;
}

export interface ButtonProps extends WithChildren {
  className?: string;
  onClick?: () => void;
  href?: string;
  to?: string;
  target?: HTMLAttributeAnchorTarget;
  icon?: React.ReactNode;
}
