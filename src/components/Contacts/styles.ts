import styled from 'styled-components';

import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;

  ${Media.down.m} {
    gap: 20px;
  }
`;
