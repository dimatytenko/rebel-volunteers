import { Wrapper, Content, InfoWrapper, InfoTitle } from './styles';
import { Logo } from '../../ui-kit/Logo';
import { Social } from '../Social';
import { LinkText } from '../../ui-kit/Button';
import { OrganisationLabelProps } from './types';

export const OrganisationLabel: React.FC<OrganisationLabelProps> = ({ links }) => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Logo width="204px" height="204px" />
        </div>
        <InfoWrapper>
          <InfoTitle>Громадська організація “rebel volunteers”</InfoTitle>
          {links.map((item) => (
            <LinkText key={item.id} href={item.href}>
              {item.text}
            </LinkText>
          ))}
          <Social size={'medium'} />
        </InfoWrapper>
      </Content>
    </Wrapper>
  );
};
