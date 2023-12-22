import styled from 'styled-components';

import { Heading1, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const HeroWrapper = styled.section``;

export const Wrapper = styled.div`
  position: relative;
`;

export const HeroTitle = styled(Heading1)`
  text-transform: uppercase;
  margin-bottom: 50px;

  ${Media.down.l} {
    margin-bottom: 17px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  gap: 24px;

  ${Media.down.l} {
    flex-direction: column;
    gap: 0;
  }
`;

export const HeroSubtitle = styled(Text1)`
  max-width: 525px;
  margin: 42px 0;

  ${Media.down.l} {
    margin: 0;
    margin-bottom: 17px;
    font-size: 14px;
  }
`;

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

export const DesktopWrapper = styled.div`
  display: block;

  ${Media.down.l} {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;

  ${Media.down.l} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    align-self: end;
  }
`;

export const MobileBottomWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const MobileImageExclude = styled.div`
  position: relative;
  top: 34px;

  ${Media.down.xxs} {
    display: none;
  }
`;
