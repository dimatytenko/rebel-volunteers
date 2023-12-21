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
import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';
import img_4 from './assets/img_4.jpg';
import img_5 from './assets/img_5.jpg';
import { ImageWithPreview } from '../../ui-kit/ImageWithPreview';
import { Donate } from '../../ui-kit/Donate';

export const HeroComponent = () => {
  return (
    <HeroWrapper>
      <Container point={POINTS.m}>
        <Wrapper>
          <HeroTitle>rebel volunteers</HeroTitle>
          <HeroContent>
            <div>
              <HeroSubtitle>
                Ми волонтери з Миколаєва. І ми об`єднали зусилля й допомагаємо відстоювати наші міста та села. Ми віримо
                в силу наших воїнів, відчуваємо підтримку світу й кожного дня переконуємося в єдності Українців,
                прагненні жити у Вільній, Незалежній, Щасливій Україні!
              </HeroSubtitle>
              <DesktopWrapper>
                <LeftBlock>
                  <ImageWithPreview src={img_1} width={110} height={140} alt="img_1" />

                  <ImageWithPreview src={img_2} width={110} height={140} alt="img_2" />
                </LeftBlock>
              </DesktopWrapper>
            </div>
            <DesktopWrapper>
              <ImageWithPreview src={img_3} width={368} height={345} alt="img_3" />
            </DesktopWrapper>
            <DesktopWrapper>
              <RightBlock>
                <ImageWithPreview src={img_4} width={175} height={235} alt="img_4" />
                <ImageWithPreview src={img_5} width={245} height={185} alt="img_5" />
              </RightBlock>
            </DesktopWrapper>
            <MobileWrapper>
              <ImageWithPreview src={img_3} width={265} height={169} alt="img_3" />
              <MobileBottomWrapper>
                <MobileImageExclude>
                  <ImageWithPreview src={img_5} width={124} height={94} alt="img_5" />
                </MobileImageExclude>
                <ImageWithPreview src={img_1} width={100} height={128} alt="img_1" />
                <ImageWithPreview src={img_4} width={114} height={154} alt="img_4" />
              </MobileBottomWrapper>
            </MobileWrapper>
          </HeroContent>

          <Donate />
        </Wrapper>
      </Container>
    </HeroWrapper>
  );
};
