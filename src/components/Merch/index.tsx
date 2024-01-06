import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useTranslation } from 'react-i18next';

import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, Content, SliderWrapper, RightSideWrapper, Title, Subtitle, StyledButton } from './styles';
import { Slider } from '../../ui-kit/Slider';
import { MerchProps } from '../../types/merch';
import { SOCIAL } from '../../constants/links';
import { SERVER_URL } from '../../constants/env';

export const MerchComponent: React.FC<MerchProps> = ({ data, lang, isLoading }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#merch-slider`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data || isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Content>
          <SliderWrapper id="merch-slider">
            {data && (
              <Slider isNavigation isLoop>
                {data?.photos.map((item) => (
                  <a
                    key={item.id}
                    href={SERVER_URL + item.image}
                    data-pswp-width={800}
                    data-pswp-height={600}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={SERVER_URL + item.image} alt="img" />
                  </a>
                ))}
              </Slider>
            )}
          </SliderWrapper>
          <RightSideWrapper>
            <Title>{t('common:titles.merch')}</Title>
            <Subtitle>{data && data[`text_${lang}`]}</Subtitle>
            <StyledButton href={SOCIAL.instagram} target="_blank" icon>
              {t('common:buttons.check')}
            </StyledButton>
          </RightSideWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
