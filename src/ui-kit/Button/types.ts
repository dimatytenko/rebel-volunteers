import { HTMLAttributeAnchorTarget } from 'react';

import { WithChildren } from '../../types/helpers';

export interface NavLinkProps extends WithChildren {
  to: string;
  active: boolean;
}

export interface LinkButtonProps extends WithChildren {
  href?: string;
  to?: string;
  target?: HTMLAttributeAnchorTarget;
  icon?: React.ReactNode;
}

export type DirectionArrowType = 'left' | 'right';
export interface ArrowButtonProps {
  className?: string;
  direction: DirectionArrowType;
  onClick?: () => void;
}
