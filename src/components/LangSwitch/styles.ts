import styled from 'styled-components';

import { Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const LangWrapper = styled.div`
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transition.primary};

  &:hover {
    opacity: 0.8;
  }
`;

export const LangText = styled(Text1)`
  text-transform: uppercase;

  ${Media.down.l} {
    font-size: 28px;
  }
`;
