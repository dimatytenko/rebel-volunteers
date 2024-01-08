import styled from 'styled-components';

import { Heading2 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledTitle = styled(Heading2)`
  text-transform: uppercase;
  margin-bottom: 70px;

  ${Media.down.l} {
    font-size: 110px;
    overflow-wrap: break-word;
  }

  ${Media.down.m} {
    font-size: 85px;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }

  ${Media.down.s} {
    font-size: 50px;
  }

  ${Media.down.xxs} {
    font-size: 36px;
  }
`;
