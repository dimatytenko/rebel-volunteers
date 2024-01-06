import { useTranslation } from 'react-i18next';

import {
  HeroWrapper,
  Wrapper,
  HeroTitle,
  HeroContent,
  HeroSubtitle,
  RightBlock,
  LeftBlock,
  DesktopWrapper,
  MobileWrapper,
  MobileBottomWrapper,
  MobileImageExclude,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { ImageWithPreview } from '../../ui-kit/ImageWithPreview';
import { Donate } from '../../ui-kit/Donate';
import { HeroComponentProps } from '../../types/hero';
import { SERVER_URL } from '../../constants/env';

export const HeroComponent: React.FC<HeroComponentProps> = ({ data, lang }) => {
  const { t } = useTranslation();
  if (!data) return null;

  return (
    <HeroWrapper>
      <Container point={POINTS.m}>
        <Wrapper>
          <HeroTitle>{t('common:titles.hero')}</HeroTitle>
          <HeroContent>
            <div>
              <HeroSubtitle>{data && data[`text_${lang}`]}</HeroSubtitle>
              <DesktopWrapper>
                <LeftBlock>
                  <ImageWithPreview
                    src={SERVER_URL + data?.photos[0]?.image}
                    width={110}
                    height={140}
                    alt="our photo"
                    loading="lazy"
                  />
                  <ImageWithPreview
                    src={SERVER_URL + data?.photos[1]?.image}
                    width={110}
                    height={140}
                    alt="our photo"
                    loading="lazy"
                  />
                </LeftBlock>
              </DesktopWrapper>
            </div>
            <DesktopWrapper>
              <ImageWithPreview
                src={SERVER_URL + data?.photos[2]?.image}
                width={368}
                height={345}
                alt="our photo"
                loading="lazy"
              />
            </DesktopWrapper>
            <DesktopWrapper>
              <RightBlock>
                <ImageWithPreview
                  src={SERVER_URL + data?.photos[3]?.image}
                  width={175}
                  height={235}
                  alt="our photo"
                  loading="lazy"
                />
                <ImageWithPreview
                  src={SERVER_URL + data?.photos[4].image}
                  width={245}
                  height={185}
                  alt="our photo"
                  loading="lazy"
                />
              </RightBlock>
            </DesktopWrapper>
            <MobileWrapper>
              <ImageWithPreview
                src={SERVER_URL + data?.photos[2]?.image}
                width={265}
                height={169}
                alt="our photo"
                loading="lazy"
              />
              <MobileBottomWrapper>
                <MobileImageExclude>
                  <ImageWithPreview
                    src={SERVER_URL + data?.photos[4]?.image}
                    width={124}
                    height={94}
                    alt="our photo"
                    loading="lazy"
                  />
                </MobileImageExclude>
                <ImageWithPreview
                  src={SERVER_URL + data?.photos[0]?.image}
                  width={100}
                  height={128}
                  alt="our photo"
                  loading="lazy"
                />
                <ImageWithPreview
                  src={SERVER_URL + data?.photos[3]?.image}
                  width={114}
                  height={154}
                  alt="our photo"
                  loading="lazy"
                />
              </MobileBottomWrapper>
            </MobileWrapper>
          </HeroContent>
          <Donate />
        </Wrapper>
      </Container>
    </HeroWrapper>
  );
};
