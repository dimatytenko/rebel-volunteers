import React from 'react';

import { StyledSocial, IconButton } from './styles';
import { SOCIAL } from '../../constants/links';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { icon } from '../../ui-kit/Icon/Svg/types';
import { SocialProps } from './types';

const social = [
  { type: 'mail', to: SOCIAL.mail },
  { type: 'instagram', to: SOCIAL.instagram },
  { type: 'facebook', to: SOCIAL.facebook },
];

export const Social: React.FC<SocialProps> = ({ type, size }) => {
  return (
    <StyledSocial>
      {social.map((item) => (
        <IconButton key={item.type} href={item.to} target={item.type === 'mail' ? '_self' : '_blank'} $type={type}>
          {item.type === 'mail' ? (
            <IconSvg
              type={item.type as icon}
              width={size === 'medium' ? '57' : '29'}
              height={size === 'medium' ? '45' : '23'}
              viewBox="0 0 26 21"
              fill={type === 'secondary' ? 'greyHover' : 'secondary'}
            />
          ) : (
            <IconSvg
              type={item.type as icon}
              width={size === 'medium' ? '45' : '23'}
              height={size === 'medium' ? '45' : '23'}
              fill={type === 'secondary' ? 'greyHover' : 'secondary'}
            />
          )}
        </IconButton>
      ))}
    </StyledSocial>
  );
};
