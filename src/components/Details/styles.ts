import styled, { css } from 'styled-components';

import { Text2 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 100px;

  ${Media.down.m} {
    gap: 20px;
    margin-bottom: 50px;
  }
`;

export const StyledText = styled(Text2)`
  ${Media.down.m} {
    font-size: 14px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  gap: 30px;

  ${Media.down.m} {
    flex-direction: column;
  }
`;

const contentStyles = css`
  display: flex;
  flex-direction: column;
  gap: 33px;

  ${Media.down.m} {
    gap: 20px;
  }
`;

export const BottomLeftContent = styled.div`
  ${contentStyles}
  max-width: 480px;
`;

export const BottomRightContent = styled.div`
  ${contentStyles}
  max-width: 681px;
`;
