import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import { DetailsBlock } from '../DetailsBlock';
import { OrganisationLabel } from '../OrganisationLabel';
import { Ilink } from '../OrganisationLabel/types';
import { DetailsBlockData } from '../DetailsBlock/types';
import { Br } from '../../ui-kit/Br';
import { Wrapper, TopContent } from './styles';
import { IHotLine } from '../HotLines/types';
import { Hotlines } from '../HotLines';
import { HelpListData } from '../HelpList/types';
import { HelpList } from '../HelpList';
import { Title } from '../../ui-kit/Title';

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
        <TopContent>
          <OrganisationLabel links={links} />
          <DetailsBlock data={data} />
        </TopContent>
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