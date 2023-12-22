import styled from 'styled-components';

import { Heading2 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  ${Media.down.m} {
    display: none;
  }
`;

export const Title = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;
`;
