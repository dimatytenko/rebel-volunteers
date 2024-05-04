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

export const HeroComponent: React.FC<HeroComponentProps> = ({ data, lang, isLoading, t, donate }) => {
  if (!data || isLoading) return null;

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
                    src={data?.photos[0]?.image}
                    width={110}
                    height={140}
                    alt="our photo"
                    loading="lazy"
                  />
                  <ImageWithPreview
                    src={data?.photos[1]?.image}
                    width={110}
                    height={140}
                    alt="our photo"
                    loading="lazy"
                  />
                </LeftBlock>
              </DesktopWrapper>
            </div>
            <DesktopWrapper>
              <ImageWithPreview src={data?.photos[2]?.image} width={368} height={345} alt="our photo" loading="lazy" />
            </DesktopWrapper>
            <DesktopWrapper>
              <RightBlock>
                <ImageWithPreview
                  src={data?.photos[3]?.image}
                  width={175}
                  height={235}
                  alt="our photo"
                  loading="lazy"
                />
                <ImageWithPreview src={data?.photos[4].image} width={245} height={185} alt="our photo" loading="lazy" />
              </RightBlock>
            </DesktopWrapper>
            <MobileWrapper>
              <ImageWithPreview src={data?.photos[2]?.image} width={265} height={169} alt="our photo" loading="lazy" />
              <MobileBottomWrapper>
                <MobileImageExclude>
                  <ImageWithPreview
                    src={data?.photos[4]?.image}
                    width={124}
                    height={94}
                    alt="our photo"
                    loading="lazy"
                  />
                </MobileImageExclude>
                <ImageWithPreview
                  src={data?.photos[0]?.image}
                  width={100}
                  height={128}
                  alt="our photo"
                  loading="lazy"
                />
                <ImageWithPreview
                  src={data?.photos[3]?.image}
                  width={114}
                  height={154}
                  alt="our photo"
                  loading="lazy"
                />
              </MobileBottomWrapper>
            </MobileWrapper>
          </HeroContent>

          <Donate link={donate?.donate_link} lang={lang} />
        </Wrapper>
      </Container>
    </HeroWrapper>
  );
};
