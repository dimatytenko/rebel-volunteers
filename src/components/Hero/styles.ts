import styled from 'styled-components';

import { Heading1, Text1 } from '../../ui-kit/Typography';

export const HeroWrapper = styled.div``;

export const HeroTitle = styled(Heading1)`
  text-transform: uppercase;
  margin-bottom: 35px;
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  padding-bottom: 99px;
`;

export const HeroSubtitle = styled(Text1)`
  max-width: 525px;
  margin: 42px 0;
`;

export const Image = styled.img``;

export const LeftBlock = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Image6Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 8px;
`;
