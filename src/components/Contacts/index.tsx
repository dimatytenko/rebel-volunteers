import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { DetailsBlock } from '../DetailsBlock';
import { OrganisationLabel } from '../OrganisationLabel';
import { Ilink } from '../OrganisationLabel/types';
import { DetailsBlockData } from '../DetailsBlock/types';
import { Br } from '../../ui-kit/Br';
import { Wrapper, Title } from './styles';
import { IHotLine } from '../HotLines/types';
import { Hotlines } from '../HotLines';
import { HelpListData } from '../HelpList/types';
import { HelpList } from '../HelpList';

interface ContactsComponentProps {
  links: Ilink[];
  data: DetailsBlockData;
  hotLines: IHotLine[];
  helpList: HelpListData;
}

export const ContactsComponent: React.FC<ContactsComponentProps> = ({ links, data, hotLines, helpList }) => {
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>Контакти та реквізити</Title>
        <OrganisationLabel links={links} />
        <DetailsBlock data={data} />
        <Br desktop={100} mobile={20} />
        <Title>Гарячі лінії</Title>
        <Hotlines list={hotLines} />
        <Br desktop={100} mobile={20} />
        <Title>Допомога в Миколаєві</Title>
        <HelpList data={helpList} />
        <Br desktop={100} mobile={20} />
      </Container>
    </Wrapper>
  );
};
