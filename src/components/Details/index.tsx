import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, TopContent, StyledText, BottomContent, BottomLeftContent, BottomRightContent } from './styles';
import { OrganisationLabel } from '../OrganisationLabel';
import { Ilink } from '../OrganisationLabel/types';
import { DetailsBlock } from '../DetailsBlock';
import { DetailsBlockData } from '../DetailsBlock/types';
import { Title } from '../../ui-kit/Title';

interface DetailsProps {
  links: Ilink[];
  data: DetailsBlockData;
}

export const DetailsComponent: React.FC<DetailsProps> = ({ links, data }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>Реквізити</Title>
        <TopContent>
          <OrganisationLabel links={links} />
          <DetailsBlock data={data} />
        </TopContent>
        <Title>Підтримайте наших захисників і цивільних!</Title>
        <BottomContent>
          <BottomLeftContent>
            <StyledText>
              10-й місяць війни дає про себе знати і ми бачимо, як важко стали закриватися збори, але ми й бачимо, що ви
              незламні і продовжуєте невпинно донатити нам!
            </StyledText>
            <StyledText>БЕЗМЕЖНО ДЯКУЄМО ВАМ ЗА ЦЕ!</StyledText>
          </BottomLeftContent>
          <BottomRightContent>
            <StyledText>
              Не було ще жодного дня, коли б ми не витратили круглу суму на потреби цивільних та військових, і на жаль,
              з приходом холодів ці потреби виросли.
            </StyledText>
            <StyledText>
              Ми розуміємо вас і вашу втому, це нормально, але все ж таки закликаємо кожного, хто є небайдужим до долі
              нашої України, користуватись хоча б правилом 10 гривень. Бо щедрість оцінюється не тим, скільки коштів ти
              надіслав, а тим, скільки ти віддав від того, що було
            </StyledText>
          </BottomRightContent>
        </BottomContent>
      </Container>
    </Wrapper>
  );
};
