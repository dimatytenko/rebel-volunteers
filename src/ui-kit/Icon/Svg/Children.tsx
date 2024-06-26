import React from 'react';

import {
  Instagram,
  Mail,
  Facebook,
  Arrow,
  ArrowShort,
  ArrowLong,
  Phone,
  Donate,
  DonateEng,
  DonateHeart,
  Copy,
} from './Paths';
import { StyledSvgIconProps } from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({ type }) => {
  switch (type) {
    case 'instagram':
      return <Instagram />;
    case 'mail':
      return <Mail />;
    case 'facebook':
      return <Facebook />;
    case 'arrow':
      return <Arrow />;
    case 'arrow-short':
      return <ArrowShort />;
    case 'arrow-long':
      return <ArrowLong />;
    case 'phone':
      return <Phone />;
    case 'donate':
      return <Donate />;
    case 'donate-eng':
      return <DonateEng />;
    case 'donate-heart':
      return <DonateHeart />;
    case 'copy':
      return <Copy />;

    default:
      return null;
  }
};
