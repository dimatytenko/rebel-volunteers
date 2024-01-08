import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { SpeakAboutUsProps } from '../../types/speakAboutUs';
import {
  Wrapper,
  Content,
  SpeakWrapper,
  ImageWrapper,
  Image,
  SpeakContent,
  SpeakTitle,
  SpeakDescription,
  SpeakButton,
  ListItemText,
} from './styles';

export const SpeakAboutUsComponent: React.FC<SpeakAboutUsProps> = ({ data, t }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.talking')}</Title>
        <Content>
          {data.map((item) => {
            return (
              <SpeakWrapper key={item.id}>
                <ImageWrapper>
                  <Image src={item.img} alt={item.title} />
                </ImageWrapper>
                <SpeakContent>
                  <div>
                    <SpeakTitle>{item.title}</SpeakTitle>
                    <SpeakDescription>{item.description}</SpeakDescription>
                  </div>
                  <div>
                    <SpeakButton href={item.link} target="_blank" rel="noopener noreferrer">
                      <ListItemText>{item.textButton}</ListItemText>
                    </SpeakButton>
                  </div>
                </SpeakContent>
              </SpeakWrapper>
            );
          })}
        </Content>
      </Container>
    </Wrapper>
  );
};
