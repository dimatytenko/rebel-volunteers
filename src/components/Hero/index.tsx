import {
  HeroWrapper,
  HeroTitle,
  HeroContent,
  HeroSubtitle,
  Image,
  RightBlock,
  LeftBlock,
  Image6Wrapper,
} from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';
import img_4 from './assets/img_4.jpg';
import img_5 from './assets/img_5.jpg';

export const HeroComponent = () => {
  return (
    <HeroWrapper>
      <Container point={POINTS.m}>
        <HeroTitle>rebel volunteers</HeroTitle>
        <HeroContent>
          <div>
            <HeroSubtitle>
              Ми волонтери з Миколаєва. І ми об`єднали зусилля й допомагаємо відстоювати наші міста та села. Ми віримо в
              силу наших воїнів, відчуваємо підтримку світу й кожного дня переконуємося в єдності Українців, прагненні
              жити у Вільній
            </HeroSubtitle>
            <LeftBlock>
              <Image src={img_1} alt="img_1" />
              <Image src={img_2} alt="img_2" />
            </LeftBlock>
          </div>
          <Image src={img_3} alt="img_3" />
          <RightBlock>
            <Image src={img_4} alt="img_4" />
          </RightBlock>
          <Image6Wrapper>
            <Image src={img_5} alt="img_5" />
          </Image6Wrapper>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};
