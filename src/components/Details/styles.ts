import styled, { css } from 'styled-components';

import { Text2 } from '../../ui-kit/Typography';

export const Wrapper = styled.section``;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 100px;
`;

export const StyledText = styled(Text2)``;

export const BottomContent = styled.div`
  display: flex;
  gap: 33px;
`;

const contentStyles = css`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const BottomLeftContent = styled.div`
  ${contentStyles}
  max-width: 480px;
`;

export const BottomRightContent = styled.div`
  ${contentStyles}
  max-width: 681px;
`;
