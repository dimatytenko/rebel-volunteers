import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useTranslation } from 'react-i18next';

import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, SliderWrapper, RightSideWrapper, Title, Subtitle, StyledButton } from './styles';
import { Slider } from '../../ui-kit/Slider';
import { MerchProps } from './types';
import { SOCIAL } from '../../constants/links';

export const MerchComponent: React.FC<MerchProps> = ({ data }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${data.galleryID}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Content>
          <SliderWrapper id={data.galleryID}>
            <Slider isNavigation isLoop>
              {data.images.map((item) => (
                <a
                  key={item.id}
                  href={item.img}
                  data-pswp-width={800}
                  data-pswp-height={600}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.img} alt="img" />
                </a>
              ))}
            </Slider>
          </SliderWrapper>
          <RightSideWrapper>
            <Title>{t('common:titles.merch')}</Title>
            <Subtitle>
              Слідкуйте за нашими колабами! Ми постійно розвиваємось і співпрацюємо з талановитими художниками та
              дизайнерами, щоб пропонувати вам сучасний і оригінальний мерч. Разом з нами ви завжди будете у тренді! За
              наявністю, слідкуйте в інстаграмі.
            </Subtitle>
            <StyledButton href={SOCIAL.instagram} target="_blank" icon>
              Подивитись
            </StyledButton>
          </RightSideWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
