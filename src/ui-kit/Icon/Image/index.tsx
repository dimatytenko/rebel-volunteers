import React from 'react';

import logo from './assets/logo.png';

import { Icon as SIcon } from './styles';
import { StyledIconProps } from './types';

const getSrc = (type?: string) => {
  switch (type) {
    case 'logo':
      return logo;

    default:
      return '';
  }
};

export const IconImage: React.FC<StyledIconProps> = ({
  className,
  type,
  alt,
  width,
  height,
  ...props
}) => {
  if (!type) return null;
  return (
    <SIcon
      className={className}
      src={getSrc(type)}
      width={width}
      height={height}
      alt={alt || 'Image'}
      {...props}
    />
  );
};
