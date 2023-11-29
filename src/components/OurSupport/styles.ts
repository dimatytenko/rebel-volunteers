import styled from 'styled-components';

import { Heading2 } from '../../ui-kit/Typography';

export const Wrapper = styled.div``;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  line-height: 1.3;
  margin-bottom: 70px;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  max-width: 378px;
`;

export const Image = styled.img``;

export const Link = styled.a`
  font-family: e-Ukraine;
  font-feature-settings:
    'clig' off,
    'liga' off;
  line-height: 1.5;
  text-decoration: underline;
`;
