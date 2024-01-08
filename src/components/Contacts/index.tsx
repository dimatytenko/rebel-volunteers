import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { DetailsBlock } from '../DetailsBlock';
import { OrganisationLabel } from '../OrganisationLabel';
import { Br } from '../../ui-kit/Br';
import { Wrapper, TopContent } from './styles';
import { HelpList } from '../HelpList';
import { Title } from '../../ui-kit/Title';
import { Hotlines } from '../HotLines';
import { ContactsComponentProps } from '../../types/contacts';

export const ContactsComponent: React.FC<ContactsComponentProps> = ({ links, data, hotLines, helpList, lang, t }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.contacts')}</Title>
        <TopContent>
          <OrganisationLabel links={links} lang={lang} t={t} />
          <DetailsBlock data={data} lang={lang} t={t} />
        </TopContent>
        <Br desktop={100} mobile={20} />
        <Title>{t('common:titles.hotlines')}</Title>
        <Hotlines list={hotLines} lang={lang} t={t} />
        <Br desktop={100} mobile={20} />
        <Title>{t('common:titles.assistance')}</Title>
        <HelpList data={helpList} lang={lang} t={t} />
        <Br desktop={100} mobile={20} />
      </Container>
    </Wrapper>
  );
};
