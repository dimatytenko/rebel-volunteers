import styled from 'styled-components';

import { SocialType } from './types';

export const StyledSocial = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconButton = styled.a<{ $type?: SocialType }>`
  & > svg > path {
    transition: ${({ theme }) => theme.transition.primary};
  }

  &:hover > svg > path {
    fill: ${({ theme, $type }) =>
      $type === 'secondary' ? theme.palette.colors.secondary : theme.palette.colors.greyHover};
  }
`;
