import React from 'react';
import { Link } from 'react-router-dom';

import { WithChildren } from '../../types/helpers';

export const HomeLink: React.FC<WithChildren> = ({ children, ...props }) => {
  return (
    <Link to={'/'} {...props}>
      {children}
    </Link>
  );
};
