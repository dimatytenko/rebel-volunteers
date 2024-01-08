import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { Wrapper, TopContent, StyledText, BottomContent, BottomLeftContent, BottomRightContent } from './styles';
import { OrganisationLabel } from '../OrganisationLabel';
import { DetailsBlock } from '../DetailsBlock';
import { Title } from '../../ui-kit/Title';
import { DetailsProps } from '../../types/details';

export const DetailsComponent: React.FC<DetailsProps> = ({ links, data, lang, t }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.banking')}</Title>
        <TopContent>
          <OrganisationLabel links={links} lang={lang} t={t} />
          <DetailsBlock data={data} lang={lang} t={t} />
        </TopContent>
        <Title>{t('common:titles.supportOur')}</Title>
        <BottomContent>
          <BottomLeftContent>
            <StyledText>{t('common:details.text_1')}</StyledText>
            <StyledText>{t('common:details.text_2')}</StyledText>
          </BottomLeftContent>
          <BottomRightContent>
            <StyledText>{t('common:details.text_3')}</StyledText>
            <StyledText>{t('common:details.text_4')}</StyledText>
          </BottomRightContent>
        </BottomContent>
      </Container>
    </Wrapper>
  );
};
