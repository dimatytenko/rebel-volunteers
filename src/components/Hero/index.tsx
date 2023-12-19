import { HeroWrapper, HeroTitle, HeroContent, HeroSubtitle, ImageWrapper, RightBlock, LeftBlock } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';
import img_4 from './assets/img_4.jpg';
import img_5 from './assets/img_5.jpg';
import { ImageWithPreview } from '../../ui-kit/ImageWithPreview';

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
              <ImageWrapper>
                <ImageWithPreview src={img_1} width={110} height={140} alt="img_1" />
              </ImageWrapper>
              <ImageWrapper>
                <ImageWithPreview src={img_2} width={110} height={140} alt="img_2" />
              </ImageWrapper>
            </LeftBlock>
          </div>
          <ImageWrapper>
            <ImageWithPreview src={img_3} width={368} height={345} alt="img_3" />
          </ImageWrapper>
          <RightBlock>
            <ImageWrapper>
              <ImageWithPreview src={img_4} width={175} height={235} alt="img_4" />
            </ImageWrapper>
            <ImageWrapper>
              <ImageWithPreview src={img_5} width={245} height={185} alt="img_5" />
            </ImageWrapper>
          </RightBlock>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};
