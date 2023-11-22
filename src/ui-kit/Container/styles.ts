import styled from 'styled-components';

import { POINTS } from './types';

export const StyledContainer = styled.div<{ $point?: POINTS }>`
  margin: 0 auto;
  padding: 0 15px;
  max-width: ${({ $point }) => $point || POINTS.xl}px;
`;
