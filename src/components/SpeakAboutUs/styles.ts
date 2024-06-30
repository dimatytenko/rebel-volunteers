import styled from 'styled-components';

import { Heading3, Text1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section``;

export const SpeakWrapper = styled.div`
  display: flex;
  height: 260px;

  ${Media.down.m} {
    height: 110px;
  }
`;

export const ImageWrapper = styled.div`
  width: 378px;
  height: auto;

  ${Media.down.m} {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SpeakContent = styled.div<{ $back?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0px 30px 10px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};

  ${Media.down.m} {
    justify-content: flex-end;
  }

  ${Media.down.m} {
    padding: 10px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ $back }) => $back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const SpeakTitle = styled(Heading3)`
  margin-bottom: 22px;

  ${Media.down.l} {
    font-size: 28px;
  }

  ${Media.down.m} {
    display: none;
  }
`;

export const SpeakDescription = styled(Text1)`
  margin-bottom: 5px;
`;

export const ListItemText = styled(Text1)`
  text-decoration: underline;
`;

export const SpeakButton = styled.a``;
