import styled from 'styled-components';

import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  ${Media.down.xl} {
    gap: 20px;
  }

  ${Media.down.l} {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`;
