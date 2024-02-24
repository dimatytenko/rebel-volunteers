import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { SpeakAboutUsProps } from '../../types/speakAboutUs';
import {
  Wrapper,
  SpeakWrapper,
  ImageWrapper,
  Image,
  SpeakContent,
  SpeakTitle,
  SpeakDescription,
  SpeakButton,
  ListItemText,
} from './styles';
import { Slider } from '../../ui-kit/Slider';

export const SpeakAboutUsComponent: React.FC<SpeakAboutUsProps> = ({ data, lang, isLoading, t }) => {
  if (!data || isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.talking')}</Title>
      </Container>
      <Container point={POINTS.l}>
        <Slider isNavigation isLoop isGridFull isMain spaceBetween={30}>
          {data.map((item) => {
            return (
              <SpeakWrapper key={item.id}>
                <ImageWrapper>
                  <Image src={item.image} alt={item[`title_${lang}`]} />
                </ImageWrapper>
                <SpeakContent $back={item.image}>
                  <div>
                    <SpeakTitle>
                      {' '}
                      {item[`title_${lang}`]?.length > 20
                        ? `${item[`title_${lang}`]?.slice(0, 20)}...`
                        : item[`title_${lang}`]}
                    </SpeakTitle>
                    <SpeakDescription>
                      {item[`text_${lang}`]?.length > 40
                        ? `${item[`text_${lang}`]?.slice(0, 40)}...`
                        : item[`text_${lang}`]}
                    </SpeakDescription>
                  </div>
                  <div>
                    <SpeakButton href={item.news_url} target="_blank" rel="noopener noreferrer">
                      <ListItemText> {t('common:buttons.show')}</ListItemText>
                    </SpeakButton>
                  </div>
                </SpeakContent>
              </SpeakWrapper>
            );
          })}
        </Slider>
      </Container>
    </Wrapper>
  );
};
